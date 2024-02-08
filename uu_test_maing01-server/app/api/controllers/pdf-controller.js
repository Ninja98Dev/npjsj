"use strict";

class PdfController {
    
    async generate(data) {
        const schools = data.getDtoIn()[''];
        const test = await calculateIngretions(schools);
        console.log(...test);
    }

}

const IngretionsAbl = require('../../abl/ingretions-abl');
const FoodAbl = require('../../abl/food-abl');
const awid = "22222222222222222222222222222222";

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
            if(foodType.foods && foodType.foods.length > 0){
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
            }
            newSchool.foodTypes.push(newFoodType);
        }
        output.push(newSchool);
    }
    //const ingretions = Object.entries(ingretionCounts).map(([id, {quantity, mj, name}]) => ({ id, quantity: parseFloat(quantity.toFixed(3)), mj, name}));
    return output;
  }

module.exports = new PdfController();
