//@@viewOn:imports
import { createVisualComponent, PropTypes } from "uu5g05";

import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";

import FoodPicker from "./foodPicker.js";
import ButtonToolTip from "../buttonToolTip.js";
import FoodItem from "./foodItem.js";
//@@viewOff:imports

//@@viewOn:constants
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
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
            <FoodItem icon={"mdi-food"} type={"Halušky"}/>
          </Uu5Elements.ScrollableBox>
        </div>

        <div className={Css.footer()}>
        <Uu5Elements.ListItem className={Config.Css.css`padding:0; padding:0rem; height:100%; justify-content: space-evenly;`}>
          <FoodPicker categories={["Polievky"]} buttonProps={{tip:"Polievka", icon:"mdi-bowl", effect:"upper", colorScheme:"neutral", significance:"highlighted"}} header="Polievky"/>
          <FoodPicker categories={["Pokrmy z hovädzieho mäsa", "Pokrmy z bravčového mäsa", "Pokrmy z teľacieho mäsa", "Pokrmy z hydiny", "Pokrmy z rybieho mäsa", "Pokrmy z králika", "Pokrmy z vnútorností", "Pokrmy z mletého mäsa a polomäsité pokrmy", "Pokrmy bezmäsité", "Pokrmy múčne"]} buttonProps={{tip:"Hlavné jedlo", icon:"mdi-food", effect:"upper", colorScheme:"neutral", significance:"highlighted"}} header="Hlavné jedlá"/>
          <FoodPicker categories={["Prílohy"]} buttonProps={{tip:"Príloha", icon:"mdi-rice", effect:"upper", colorScheme:"neutral", significance:"highlighted"}} header="Prílohy"/>
          <FoodPicker categories={["Chlieb, pečivo"]} buttonProps={{tip:"Pečivo", icon:"mdi-food-croissant", effect:"upper", colorScheme:"neutral", significance:"highlighted"}} header="Pečivá"/>
          <FoodPicker categories={["Doplnkové pokrmy"]} buttonProps={{tip:"Zákusok", icon:"mdi-food-apple", effect:"upper", colorScheme:"neutral", significance:"highlighted"}} header="Zákusky"/>
          <FoodPicker categories={["Nápoje"]} buttonProps={{tip:"Voda", icon:"mdi-cup", effect:"upper", colorScheme:"neutral", significance:"highlighted"}} header="Vody"/>
          
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
