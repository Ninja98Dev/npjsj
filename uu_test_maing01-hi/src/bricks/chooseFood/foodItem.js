//@@viewOn:imports
import { createVisualComponent, PropTypes } from "uu5g05";

import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
    main: () => Config.Css.css`
      margin: 0.5rem 0.85rem 0 0.5rem;
      overflow: hidden;
      align-items: center;
      display: flex;
      height: fit-content;
      gap: 0.5rem;
    `,

    icon: () => Config.Css.css`
      display: flex;
      height: 100%;
      font-size:2rem;
    `,

    text: () => Config.Css.css`
      border-bottom: solid 0.05rem white;
      white-space: nowrap;
      display: flex;
      height: 100%;
      width: 100%;
    `,
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const FoodItem = createVisualComponent({
  //@@viewOn:statics
  
  uu5Tag: Config.TAG + "FoodItem",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    icon: PropTypes.string,
    type : PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    icon: undefined,
    type : "NaN",
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { icon, type } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <div className={Css.main()}>
        <Uu5Elements.Icon icon={icon} className={Css.icon()} />
        <Uu5Elements.Text category={"story"} segment={"body"} type={"major"} className={Css.text()}>{type}</Uu5Elements.Text>
      </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FoodItem };
export default FoodItem;
//@@viewOff:exports
