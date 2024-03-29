//@@viewOn:imports
import { createVisualComponent, Utils, BackgroundProvider } from "uu5g05";
import Uu5Elements from "uu5g05-elements";
import Plus4U5 from "uu_plus4u5g02";
import Plus4U5App from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Home from "../routes/home.js";

//@@viewOff:imports

//@@viewOn:constants
const About = Utils.Component.lazy(() => import("../routes/about.js"));
const Menu = Utils.Component.lazy(() => import("../routes/menu.js"));
const ChooseFood = Utils.Component.lazy(() => import("../routes/chooseFood.js"));
const InitAppWorkspace = Utils.Component.lazy(() => import("../routes/init-app-workspace.js"));
const ControlPanel = Utils.Component.lazy(() => import("../routes/control-panel.js"));
const EditNorms = Utils.Component.lazy(() => import("../routes/editNorms.js"));
const Stats = Utils.Component.lazy(() => import("../routes/stats.js"));

const ROUTE_MAP = {
  "": { redirect: "menu" },
  home: (props) => <Home {...props} />,
  about: (props) => <About {...props} />,
  menu: (props) => <Menu {...props}/>,
  chooseFood: (props) => <ChooseFood {...props}/>,
  editNorms: (props) => <EditNorms {...props}/>,
  stats: (props) => <Stats {...props}/>,
  "sys/uuAppWorkspace/initUve": (props) => <InitAppWorkspace {...props} />,
  controlPanel: (props) => <ControlPanel {...props} />,
  "*": () => (
    <Uu5Elements.Text category="story" segment="heading" type="h1">
      Not Found ha
    </Uu5Elements.Text>
  ),
};
//@@viewOff:constants

//@@viewOn:css
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const Spa = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Spa",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render() {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Plus4U5.SpaProvider initialLanguageList={["en", "cs"]}>
        <Uu5Elements.ModalBus>
          <BackgroundProvider background="soft">
            <Plus4U5App.Spa routeMap={ROUTE_MAP}/>
          </BackgroundProvider>
        </Uu5Elements.ModalBus>
      </Plus4U5.SpaProvider>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { Spa };
export default Spa;
//@@viewOff:exports
