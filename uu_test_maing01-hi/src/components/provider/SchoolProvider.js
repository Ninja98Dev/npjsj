import { useRoute, useState } from "uu5g05";
import { createContext } from "react";
import Calls from "../../calls";

export const SchoolContext = createContext();

const defaultSchools = [
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

export const SchoolProvider = ({ children }) => {
  const [route, setRoute] = useRoute();
  const [schools, setSchools] = useState(defaultSchools);
  const [pdfData, setPdfData] = useState();

  function addFood(schoolName, foodTypeTitle, food){
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
  
  function editBoarders(schoolName, foodTypeTitle, boarders){
    const school = schools.find(school => school.name === schoolName);
    if(school){
      const foodType = school.foodTypes.find(foodType => foodType.title === foodTypeTitle);
      if(foodType){
        foodType.boarders = boarders;
      }
    }
  }

  function generatePDF(){
    const dtoIn = JSON.stringify(schools);
    Calls.generatePDF(dtoIn).then((data) => {
      setRoute('foodpdf', {schools: data});
    });
  }
    
  return <SchoolContext.Provider value={{schools, setSchools, addFood, editBoarders, generatePDF, pdfData}}>{children}</SchoolContext.Provider>;
};