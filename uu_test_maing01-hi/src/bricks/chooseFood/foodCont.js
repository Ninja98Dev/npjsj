let schools = [
    {
        name: "Materská škola",
        category: "A",
        foodTypes: [
            {
                title: "Desiata",
                foods: [],
                waters: 0,
                boarders: 0
            },
            {
                title: "Obed",
                foods: [],
                waters: 0,
                boarders: 0
            },
            {
                title: "Olovrant",
                foods: [],
                waters: 0,
                boarders: 0
            }
        ]
    },
    {
        name: "Stredná škola",
        category: "C",
        foodTypes: [
            {
                title: "Raňajky",
                foods: [],
                waters: 0,
                boarders: 0
            },
            {
                title: "Obed 1",
                foods: [],
                waters: 0,
                boarders: 0
            },
            {
                title: "Obed 2",
                foods: [],
                waters: 0,
                boarders: 0
            },
            {
                title: "Večera",
                foods: [],
                waters: 0,
                boarders: 0
            }
        ]
    }
];

exports.addFood = function(schoolName, foodTypeTitle, food){
    const school = schools.find(school => school.name === schoolName);
    if(school){
        const foodType = school.foodTypes.find(foodType => foodType.title === foodTypeTitle);
        if(foodType){
            let meal = {kod: food.kod};
            if(food.kategoria === "Nápoje"){
                meal.water = true;
                foodType.waters += 1;
            }
            foodType.foods.push(meal);
        }
    }
}

exports.editBoarders = function(schoolName, foodTypeTitle, boarders){
    const school = schools.find(school => school.name === schoolName);
    if(school){
        const foodType = school.foodTypes.find(foodType => foodType.title === foodTypeTitle);
        if(foodType){
            foodType.boarders = boarders;
        }
    }
}

exports.getSchools = function(){return schools;};
