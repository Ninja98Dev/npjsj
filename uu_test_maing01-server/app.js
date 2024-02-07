const appServer = require("uu_appg01_server");

appServer.start();

const IngretionsAbl = require('./app/abl/ingretions-abl');
const FoodAbl = require('./app/abl/food-abl');
const awid = "22222222222222222222222222222222";

let schools = [
    {
        name: "Materska škola",
        category: "A",
        foodTypes: [
            {
                title: "Desiata",
                foods: [],
                boarders: 0
            },
            {
                title: "Obed",
                foods: [{kod:"66460"}],
                boarders: 1
            },
            {
                title: "Olovrant",
                foods: [],
                boarders: 0
            }
        ]
    },
    {
        name: "Stredna škola",
        category: "C",
        foodTypes: [
            {
                title: "Raňajky",
                foods: [],
                boarders: 0
            },
            {
                title: "Obed 1",
                foods: [],
                boarders: 0
            },
            {
                title: "Obed 2",
                foods: [],
                boarders: 0
            },
            {
                title: "Večera",
                foods: [],
                boarders: 0
            }
        ]
    }
];

function calculateIngretionQuantity(ingretion, category, boarders){
    let quantity = 0;
    switch(category){
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
    return (boarders*quantity)/100;
}

async function getAllIngretions(food, category, boarders){
    return new Promise(async (resolve) => {
        let dtoIn = { kod: food.kod }
        let daoIngretions = await IngretionsAbl.list(awid, dtoIn);
        let ingretions = [];
        daoIngretions.itemList.forEach(ingretion => {
            let quantity = calculateIngretionQuantity(ingretion, category, boarders);
            /*
            if(norma.voda){
                quantity = quantity/vody;
            }
            */
            const newIngretion = {
                id: ingretion.id,
                mj: ingretion.mj,
                name: ingretion.nazov,
                quantity: quantity
            };
            ingretions.push(newIngretion);
        });
        resolve(ingretions);
        // obkejt s {id, mnozstvo}
    });
}
async function calculateIngretions(schools) {
    const output = [];
    for (const school of schools) {
        let newSchool = {
            name: school.name,
            foodTypes: []
        }
        for (const foodType of school.foodTypes) {
            let newFoodType = {
                title: foodType.title,
                ingretions: []
            }
            for (const food of foodType.foods) {
                const result = await getAllIngretions(food, school.category, foodType.boarders);
                for (const ingretion of result) {
                    if (newFoodType.ingretions[ingretion.id]) {
                        newFoodType.ingretions[ingretion.id].quantity += parseFloat(ingretion.quantity);
                    } else {
                        newFoodType.ingretions[ingretion.id] = {quantity:parseFloat(ingretion.quantity), mj:ingretion.mj, name:ingretion.name};
                    }
                }
            }
            newSchool.foodTypes.push(newFoodType);
        }
        output.push(newSchool);
    }
    //const ingretions = Object.entries(ingretionCounts).map(([id, {quantity, mj, name}]) => ({ id, quantity: parseFloat(quantity.toFixed(3)), mj, name}));
    return output;
  }

async function test(){
    calculateIngretions(schools).then((result) =>{
        console.log(...result);
    });
}
test();