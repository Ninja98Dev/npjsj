//@@viewOn:imports
import { createVisualComponent, PropTypes, useCallback, useState } from "uu5g05";

import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";

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
        width: 100%;
        height: 18.5rem;
        color: white;
        margin-top: 1rem;
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
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    title : "Default title",
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { title } = props;
    //@@viewOff:private

    const [items, setItems] = useState([
      { value: '' },
      { value: '' },
      { value: '' }
    ])

     const addFood = useCallback((id, value) => {
        setItems(prevItems => prevItems.map((item, index) => {
          return {item : { value: 'a' }}
        }))
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
            {items.map((item, index) => (
              <FoodItem key={index} type={item.value}/>
            ))}
          </Uu5Elements.ScrollableBox>
        </div>

        <div className={Css.footer()}>
        <Uu5Elements.ListItem className={Config.Css.css`padding:0; padding:0rem; height:100%; justify-content: space-evenly;`}>
          {foodPickers.map(foodPicker => (
            <FoodPicker category={foodPicker.category} subcategories={foodPicker.subcategories} icon={foodPicker.icon} addFood={addFood} />
          ))}
          <Uu5Elements.Input effect="upper" colorScheme={"neutral"} significance="highlighted" width={"3rem"} placeholder="0" className={Css.input()}/>
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
