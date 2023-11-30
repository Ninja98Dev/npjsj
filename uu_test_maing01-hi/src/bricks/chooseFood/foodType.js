//@@viewOn:imports
import { Utils, createVisualComponent, PropTypes, useScreenSize } from "uu5g05";

import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";

import ButtonToolTip from "../buttonToolTip.js";
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
        height: 15rem;
        color: white;
        margin-top: 1rem;
    `,
    header: () => Config.Css.css`
        background-color: #404040;
        border-radius: 0.5rem 0.5rem 0 0;
        text-align: center;
        padding: 0.5rem;
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
        padding: 0.5rem;
        flex-basis: 20%;
        height: 100%
    `,

    input: () => Config.Css.css`
      text-align: center;
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
            <Uu5Elements.Text category={"story"} segment={"heading"} type={"h3"}>{title}</Uu5Elements.Text>
        </div>
        
        <div className={Css.body()}>
            
        </div>

        <div className={Css.footer()}>
        <Uu5Elements.ListItem className={Config.Css.css`padding:0;gap:0.4rem; padding:0rem;`}>
          <ButtonToolTip tip="Polievka" icon={"mdi-bowl"} effect="upper" colorScheme="neutral" significance="highlighted" onClick={()=>console.log("cus")}/>
          <ButtonToolTip tip="Hlavné jedlo" icon={"mdi-food"} effect="upper" colorScheme={"neutral"} significance="highlighted" onClick={()=>console.log("cus")}/>
          <ButtonToolTip tip="Príloha" icon={"mdi-rice"} effect="upper" colorScheme={"neutral"} significance="highlighted" onClick={()=>console.log("cus")}/>
          <ButtonToolTip tip="Pečivo" icon={"mdi-food-croissant"} effect="upper" colorScheme={"neutral"} significance="highlighted" onClick={()=>console.log("cus")}/>
          <ButtonToolTip tip="Zákusok" icon={"mdi-food-apple"} effect="upper" colorScheme={"neutral"} significance="highlighted" onClick={()=>console.log("cus")}/>
          <ButtonToolTip tip="Voda" icon={"mdi-cup"} effect="upper" colorScheme={"neutral"} significance="highlighted" onClick={()=>console.log("cus")}/>
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
