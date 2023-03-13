const appServer = require("uu_appg01_server");

appServer.start();

const IngretionsAbl = require('./app/abl/ingretions-abl');
const awid = "22222222222222222222222222222222";

const frontend = {
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

function calculateIngretionQuantity(ingretion, trieda){
    switch(trieda){
        case "A":
            return ingretion.ahruba;
        case "B":
            return ingretion.bhruba;
        case "C":
            return ingretion.chruba;
        case "D":
            return ingretion.dhruba;
        default:
            return null;
    }
}

async function getAllIngretions(norma, trieda){
    return new Promise(async (resolve) => {
        let dtoIn = { kod: norma }
        let daoIngretions = await IngretionsAbl.list(awid, dtoIn);
        let ingretions = [];
        daoIngretions.itemList.forEach(ingretion => {
            const newIngretion = {
                id: ingretion.id,
                quantity: calculateIngretionQuantity(ingretion, trieda)
            };
            if(ingretions.some(item => item.id === ingretion.id)){
                //  Ak sa ingrediencia nachadza v zozname tak pripocitat ku nej nove mnozstvo
                console.log(true);
                const index = ingretions.findIndex(item => item.id == newIngretion.id);
                ingretions[index].quantity += newIngretion.quantity; 
        
            }else {
                //  Ak sa nenachadza ingrediencia v zozname, vlozit ju tam
                ingretions.push(newIngretion);
            } 
        });
        resolve(ingretions);
        // obkejt s {nazov, mnozstvo}
    });
}
async function calculateIngretions(frontend) {
    const ingretionCounts = {};
    for (const skola of frontend.skola) {
      for (const strava of skola.strava) {
        for (const norma of strava.normy) {
          const result = await getAllIngretions(norma, skola.type);
          for (const ingretion of result) {
            if (ingretionCounts[ingretion.id]) {
              ingretionCounts[ingretion.id] += parseFloat(ingretion.quantity);  //premeni na int
            } else {
              ingretionCounts[ingretion.id] = parseFloat(ingretion.quantity);
            }
          }
        }
      }
    }
    const ingretions = Object.entries(ingretionCounts).map(([id, quantity]) => ({ id, quantity: parseFloat(quantity.toFixed(3)) }));
    console.log("ingretions", ingretions);
    return ingretions;
  }
  
/*
async function calculateIngretions(frontend){
    return new Promise(async (resolve) =>{
        let ingretions = [];
        frontend.skola.forEach(skola => {
            skola.strava.forEach(strava => {
                strava.normy.forEach(norma => {
                    getAllIngretions(norma, skola.type).then((result) => {
                        result.forEach(ingretion => {
                            if(ingretions.some(item => item.id === ingretion.id)){
                                //  Ak sa ingrediencia nachadza v zozname tak pripocitat ku nej nove mnozstvo
                                console.log(true);
                                const index = ingretions.findIndex(item => item.id == ingretion.id);
                                ingretions[index].quantity += ingretion.quantity; 
                        
                            }else {
                                //  Ak sa nenachadza ingrediencia v zozname, vlozit ju tam
                                ingretions.push(ingretion);
                            } 
                        });
                    });
                });
            });
        });
    });
}
*/ 


async function test(){
    calculateIngretions(frontend).then((result) =>{
        console.log(result);
    });
}
test();


/*

    NEW

*/


 //Dobru noc :)