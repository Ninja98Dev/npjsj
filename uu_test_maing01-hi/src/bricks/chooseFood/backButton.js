//@@viewOn:imports
import { createVisualComponent, PropTypes } from "uu5g05";

import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  panel: () =>
    Config.Css.css`
      position: absolute;
	  left: 5px;
	  top: 5px;
    `,
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const BackButton = createVisualComponent({
  //@@viewOn:statics
  
  uu5Tag: Config.TAG + "BackButton",
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
      <div className={Css.panel()}>
		    <Uu5Elements.Button className={Css.panel()} href={"./menu"} size="xl" significance="highlighted" colorScheme="primary"><h2>←</h2></Uu5Elements.Button>
      </div>
	);
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { BackButton };
export default BackButton;
//@@viewOff:exports
