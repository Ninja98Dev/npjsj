//@@viewOn:imports
import { createVisualComponent, PropTypes, useCallback, useState } from "uu5g05";

import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";

import FoodCont from './foodCont.js';
import FoodPicker from "./foodPicker.js";
import FoodItem from "./foodItem.js";
//@@viewOff:imports

//@@viewOn:constants
/*
  Polievky: 
  Hlavné jedlá:
    Pokrmy z hovädzieho mäsa
		Pokrmy z bravčového mäsa
		Pokrmy z teľacieho mäsa
		Pokrmy z hydiny
		Pokrmy z rybieho mäsa
		Pokrmy z králika
		Pokrmy z vnútorností
		Pokrmy z mletého mäsa a polomäsité pokrmy
		Pokrmy bezmäsité
		Pokrmy múčne
		Studené hlavné jedlá
		Pokrmy zo zveriny
  Prílohy:
    Závarky
    Posýpky
    Prívarky
    Omáčky
    Kompóty
  Chlieb, pečivo:
    Nátierky, oblohy, bagety
  Doplnkové pokrmy:
    Ovocie
		Mučniky
  Nápoje: 
*/

const foodPickers = [
  {
    category : "Polievky",
    subcategories : [],
    icon: "mdi-bowl"
  },
  {
    category : "Hlavné jedlá",
    subcategories : [
      "Pokrmy z hovädzieho mäsa",
      "Pokrmy z bravčového mäsa",
      "Pokrmy z teľacieho mäsa",
      "Pokrmy z hydiny",
      "Pokrmy z rybieho mäsa",
      "Pokrmy z králika",
      "Pokrmy z vnútorností",
      "Pokrmy z mletého mäsa a polomäsité pokrmy",
      "Pokrmy bezmäsité",
      "Pokrmy múčne",
      "Studené hlavné jedlá",
      "Pokrmy zo zveriny"
    ],
    icon: "mdi-food"
  },
  {
    category : "Prílohy",
    subcategories : [
      "Závarky",
      "Posýpky",
      "Prívarky",
      "Omáčky",
      "Kompóty"
    ],
    icon: "mdi-rice"
  },
  {
    category : "Chlieb, pečivo",
    subcategories : [
      "Nátierky, oblohy, bagety"
    ],
    icon: "mdi-food-croissant"
  },
  {
    category : "Doplnkové pokrmy",
    subcategories : [
      "Ovocie",
      "Mučniky"
    ],
    icon: "mdi-food-apple"
  },
  {
    category : "Nápoje",
    subcategories : [],
    icon: "mdi-cup"
  }
] 
//@@viewOff:constants

//@@viewOn:css
const Css = {
    main: () => Config.Css.css`
        flex-direction: column;
        border-radius: 1rem;
        display: flex;
        height: 18.5rem;
        min-width: 20rem;
        width: fit-content;
        color: white;
        margin-top: 1rem;
        margin: 1rem;
    `,
    header: () => Config.Css.css`
        background-color: #404040;
        border-radius: 0.5rem 0.5rem 0 0;
        text-align: center;
        flex-basis: 20%
    `,

    body: () => Config.Css.css`
        background-color: #303030;
        text-align: center;
        flex-basis: 60%
    `,

    footer: () => Config.Css.css`
        background-color: #404040;
        border-radius: 0 0 0.5rem 0.5rem;
        align-items: center;
        flex-basis: 20%;
    `,

    input: () => Config.Css.css`
      text-align: center;
    `,

    title: () => Config.Css.css`
      height: 100%;
      line-height: 3.7rem;
    `,
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const FoodType = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "FoodType",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    title : PropTypes.string,
    school : PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    title : "Default title",
    school : undefined
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { title, school } = props;
    //@@viewOff:private

    const [foods, setFoods] = useState([]);

    const addFood = useCallback((food, icon) => {
      setFoods(prevItems => [...prevItems, {icon,nazov:food.nazov}]);
      FoodCont.addFood(school, title, food);
    }, []) // No dependencies

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div className={Css.main()}>
        <div className={Css.header()}>
            <Uu5Elements.Text category={"story"} segment={"heading"} type={"h3"} className={Css.title()}>{title}</Uu5Elements.Text>
        </div>
        
        <div className={Css.body()}>
          <Uu5Elements.ScrollableBox maxHeight="11.1rem">
            {foods.map(food => (
              <FoodItem type={food.nazov} icon={food.icon}/>
            ))}
          </Uu5Elements.ScrollableBox>
        </div>

        <div className={Css.footer()}>
        <Uu5Elements.ListItem className={Config.Css.css`padding:0; padding:0rem; height:100%; justify-content: space-evenly;`} colorScheme="building" significance="subdued">
          {foodPickers.map(foodPicker => (
            <FoodPicker category={foodPicker.category} subcategories={foodPicker.subcategories} icon={foodPicker.icon} addFood={addFood} />
          ))}
          <Uu5Elements.Input effect="upper" width={"3rem"} placeholder="0" className={Css.input()} onChange={change => {FoodCont.editBoarders(school, title, change.data.value)}}/>
        </Uu5Elements.ListItem>
        </div>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FoodType };
export default FoodType;
//@@viewOff:exports
