//@@viewOn:imports
import { PropTypes, createVisualComponent, useRoute, useState } from "uu5g05";

import { SchoolContext } from "../../components/provider/SchoolProvider.js";
import { useContext } from "react";

import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";
import Calls from "../../calls.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
    ramcek: () => Config.Css.css`
        margin: 0; 
        display: flex; 
        justify-content: center;
        align-items: center;
    `,
    pdf: () => Config.Css.css`
        width: auto;
        max-height: auto;
        border: 1px solid black;
        min-width: 50rem;
    `,
    header: () => Config.Css.css`
        display: flex;
        max-width: auto;
        height: 6rem;
        border-bottom: 1px solid black;
        align-items: center;
        justify-content: space-between;
    `,
    datum: () => Config.Css.css`
        margin-right: 3rem;
    `,
    header_img: () => Config.Css.css`
        width: 8rem;
        height: 8rem;
        margin-left: 2rem;
    `,
    body: () => Config.Css.css`
        display: block;
    `,
    p1: () => Config.Css.css`
        display: flex;
        max-width: 80rem;
        height: 3rem;
        border: 1px solid black;
        border-bottom: none;
        margin: 1rem;
        margin-bottom: -1rem;
        padding-left: 1rem;
        align-items: center;
        justify-content: space-between;
    `,
    p1_h2: () => Config.Css.css`
        font-weight: normal;
        font-style: italic;
    `,
    p1_body: () => Config.Css.css`
        display: flex;
        max-width: 80rem;
        max-height: auto;   
        border: 1px solid black;
        margin: 1rem;
    `,
    Ingrediencie: () => Config.Css.css`
        border-right: 1px solid black; 
        /* max-width: 40rem; */
        flex: 1;
        width: fit-content;
        padding: 1rem 1rem 1rem 1rem;
    `,
    Ingrediencie_h3: () => Config.Css.css`
        font-weight: 500;
        font-style: oblique;
        margin: -0.3rem 0rem -0.3rem 0rem;
    `,
    Postup: () => Config.Css.css`
        flex:1;
        width: fit-content;
        padding: 1rem 1rem 1rem 1rem;
    `,
    Postup_h3: () => Config.Css.css`
        font-weight: 500;
        font-style: oblique;
        margin: -0.3rem 0rem -0.3rem 0rem;
    `,
    button: () => Config.Css.css`
        display: flex;
        margin-left: 35rem;
        margin-bottom: 1rem;
        background-color:#ff0000;
        color: white;
        border: none; 
        padding: 10px 20px; 
        border-radius: 20px; 
        font-family: Arial, sans-serif;
        font-size: 16px; 
        cursor: pointer;
        transition: background-color 0.3s, color 0.3s;
    `
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const FoodPDF = createVisualComponent({
  //@@viewOn:statics
  
  uu5Tag: Config.TAG + "FoodPDF",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const {} = props;

    const [route, setRoute] = useRoute();

    let schools;
    if(route.params.schools){
        schools = JSON.parse(route.params.schools);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (<div>
        { !schools ? (<div><h1>Error: Data not found</h1></div>) : schools.map((school, index) => (
            <div key={index} className={Css.ramcek()}>
                <div className={Css.pdf()}>
                    <div className={Css.header()}>
                        <img src="assets/images/logo/light.png" alt="logo" width="50rem"/>
                        <h1>{school.name}</h1>
                        <p className={Css.datum()}></p>
                    </div>
                    {school.foodTypes.map((foodType, index) => (
                        <div key={index} className={Css.body()}>
                            <div className={Css.p1()}>
                                <h2>{foodType.title}</h2>
                            </div>
                            <div className={Css.p1_body()}>
                                <div className={Css.Ingrediencie()}>
                                    <h3>Ingerdiencie:</h3>
                                    {Object.keys(foodType.ingretions).map((key, index) => (
                                        <p key={index}>{index+1}. {key}: {foodType.ingretions[key].quantity}{foodType.ingretions[key].mj}</p>
                                    ))}
                                </div>
                                <div className={Css.Postup()}>
                                    <h3>Postupy:</h3>
                                    {foodType.recipes.map((recipe, index) => (
                                        <div key={index}>
                                            <h1>{recipe.nazov}</h1>
                                            <p>{recipe.postup}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>);
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FoodPDF };
export default FoodPDF;
//@@viewOff:exports
