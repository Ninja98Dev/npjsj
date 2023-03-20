const {IngretionsAbl} = require('./uu_test_maing01-server/app/abl/ingretions-abl');
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
                    normy: ["66460", "66460"]//kod normy
                },
                {
                    type: "desiata",
                    pocet: "15" ,
                    normy: ["66460", "66460"]//kod normy
                },
                {
                    type: "obed",
                    pocet: "15" ,
                    normy: ["66460", "66460"]//kod normy
                },
                {
                    type: "olovrant",
                    pocet: "15" ,
                    normy: ["66460", "66460"]//kod normy
                }
            ]
        },
        {
            type: "c",
            name: "stredna",
            strava: [
                {
                    type: "ranajky",
                    pocet: "15" ,
                    normy: ["66460", "66460"]//kod normy
                },
                {
                    type: "desiata",
                    pocet: "15" ,
                    normy: ["66460", "66460"]//kod normy
                },
                {
                    type: "obed",
                    pocet: "15" ,
                    normy: ["66460", "66460"]//kod normy
                },
                {
                    type: "olovrant",
                    pocet: "15" ,
                    normy: ["66460", "66460"]//kod normy
                },
                {
                    type: "večera",
                    pocet: "15" ,
                    normy: ["66460", "66460"]//kod normy
                },
            ]
        }
    ]
}

let ingretions = [];

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
    const dtoIn = { kod: norma }
    let daoIngretions = await IngretionsAbl.get(awid, dtoIn);
    daoIngretions.forEach(ingretion => {
        const newIngretion = calculateIngretionQuantity(ingretion, trieda);
        if(ingretions.some(ingretion => ingretion.id === newIngretion.id)){
            //  Ak sa ingrediencia nachadza v zozname tak pripocitat ku nej nove mnozstvo
            const index = ingretions.findIndex(item => item.id == newIngretion.id);
            ingretions[index].quantity += newIngretion.quantity; 
    
        }else {
            //  Ak sa nenachadza ingrediencia v zozname, vlozit ju tam
            ingretions.push(newIngretion);
        } 
    });
    // obkejt s {nazov, mnozstvo}
}



async function calculateIngretions(frontend){
    frontend.skola.forEach(skola => {
        skola.strava.forEach(strava => {
            strava.normy.forEach(norma => {
                getAllIngretions(norma, skola.type);
                
            });
        });
    });
    return //celkovy vysledok
}

calculateIngretions(frontend).then(console.log(ingretions));

module.exports = calculateIngretions();