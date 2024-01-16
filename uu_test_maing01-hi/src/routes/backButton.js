//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

const Css = {
  panel: () =>
    Config.Css.css`
      position: absolute;
	  left: 5px;
	  top: 5px;
    `,
};

function BackButton() {
    return (
      <div className={Css.panel()}>
		<Uu5Elements.Button className={Css.panel()} href={"./menu"} size="xl" significance="highlighted" colorScheme="primary"><h2>←</h2></Uu5Elements.Button>
      </div>);
}


export {BackButton};
export default BackButton;