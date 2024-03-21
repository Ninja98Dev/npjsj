"use strict";

class PdfController {
    
    async generate(data) {
        const schools = JSON.parse(data.getDtoIn());
        const output = await calculateIngretions(schools);

        console.log(typeof output instanceof Array);
        return output.schools;
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

async function getAllIngretions(food, category, foodType){
    return new Promise(async (resolve) => {
        let dtoIn = { kod: food.kod }
        let daoIngretions = await IngretionsAbl.list(awid, dtoIn);
        let ingretions = [];
        daoIngretions.itemList.forEach(ingretion => {
            let quantity = calculateIngretionQuantity(ingretion, category, foodType.boarders);

            if(food.water){
                quantity = quantity/foodType.waters;
            }

            const newIngretion = {
                name: ingretion.nazov,
                quantity: quantity,
                mj: ingretion.mj
            };
            ingretions.push(newIngretion);
        });

        resolve(ingretions);
    });
}

async function getRecipe(dtoIn){
    return new Promise(async (resolve) => {
        let daoFood = await FoodAbl.get(awid, dtoIn);
        const recipe = {
            nazov: daoFood.nazov,
            postup: daoFood.postup
        }
        resolve(recipe);
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
                ingretions: [],
                recipes: []
            }
            if(foodType.foods && foodType.foods.length > 0){
                for (const food of foodType.foods) {
                    const recipe = await getRecipe(food);
                    const result = await getAllIngretions(food, school.category, foodType);
                    //console.log(result);
                    let ingretions = [];
                    for (const ingretion of result) {
                        if (ingretions[ingretion.name]) {
                            ingretions[ingretion.name].quantity += parseFloat(ingretion.quantity);
                        } else {
                            ingretions[ingretion.name] = {quantity:parseFloat(ingretion.quantity), mj:ingretion.mj};
                        }
                    }
                    
                    //ingretions = Object.entries(ingretions.length).map(([id, {quantity, mj, name}]) => ({ id, quantity: parseFloat(quantity.toFixed(3)), mj, name}));
                    newFoodType.recipes.push(recipe);
                    newFoodType.ingretions = ingretions;
                }
            }
            newSchool.foodTypes.push(newFoodType);
        }
        output.push(newSchool);
    }
    return output;
  }

module.exports = new PdfController();
