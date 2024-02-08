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
                foods: [],
                boarders: 0
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
                title: "Desiata",
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
                title: "Olovrant",
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

exports.addFood = function(schoolName, foodTypeTitle, food){
    const school = schools.find(school => school.name === schoolName);
    if(school){
        const foodType = school.foodTypes.find(foodType => foodType.title === foodTypeTitle);
        if(foodType){
            foodType.foods.push(food.kod);
        }
    }
}

exports.getSchools = function(){return schools};
