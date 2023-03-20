const appServer = require("uu_appg01_server");

appServer.start();

const IngretionsAbl = require('./app/abl/ingretions-abl');
const awid = "22222222222222222222222222222222";

const input = {
    skola : [
        {
            type: "A",
            name: "materska",
            strava: [
                {
                    type: "ranajky",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                },
                {
                    type: "desiata",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                },
                {
                    type: "obed",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                },
                {
                    type: "olovrant",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                }
            ]
        },
        {
            type: "C",
            name: "stredna",
            strava: [
                {
                    type: "ranajky",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                },
                {
                    type: "desiata",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                },
                {
                    type: "obed",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                },
                {
                    type: "olovrant",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                },
                {
                    type: "večera",
                    pocet: "15" ,
                    normy: ["66460", "66465"]//kod normy
                },
            ]
        }
    ]
}

function calculateIngretionQuantity(ingretion, trieda, count){
    let quantity = 0;
    switch(trieda){
        case "A":
            quantity = ingretion.ahruba;
            break;
        case "B":
            quantity = ingretion.bhruba;
            break;
        case "C":
            quantity = ingretion.chruba;
            break;
        case "D":
            quantity = ingretion.dhruba;
            break;
    }
    return (count*quantity)/100;
}

async function getAllIngretions(norma, trieda, count){
    return new Promise(async (resolve) => {
        let dtoIn = { kod: norma }
        let daoIngretions = await IngretionsAbl.list(awid, dtoIn);
        let ingretions = [];
        daoIngretions.itemList.forEach(ingretion => {
            const newIngretion = {
                id: ingretion.id,
                mj: ingretion.mj,
                name: ingretion.nazov,
                quantity: calculateIngretionQuantity(ingretion, trieda, count)
            };
            ingretions.push(newIngretion);
        });
        resolve(ingretions);
        // obkejt s {id, mnozstvo}
    });
}
async function calculateIngretions(input) {
    const ingretionCounts = {};
    for (const skola of input.skola) {
      for (const strava of skola.strava) {
        for (const norma of strava.normy) {
          const result = await getAllIngretions(norma, skola.type, strava.pocet);
          for (const ingretion of result) {
            if (ingretionCounts[ingretion.id]) {
                ingretionCounts[ingretion.id].quantity += parseFloat(ingretion.quantity);
            } else {
                ingretionCounts[ingretion.id] = {quantity:parseFloat(ingretion.quantity), mj:ingretion.mj, name:ingretion.name};
            }
          }
        }
      }
    }
    const ingretions = Object.entries(ingretionCounts).map(([id, {quantity, mj, name}]) => ({ id, quantity: parseFloat(quantity.toFixed(3)), mj, name}));
    return ingretions;
  }

async function test(){
    calculateIngretions(input).then((result) =>{
        console.log(result);
    });
}
test();