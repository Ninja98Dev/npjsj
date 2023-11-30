//@@viewOn:imports
import { Utils, createVisualComponent, useSession, useAppBackground } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

import FoodType from "../bricks/chooseFood/foodType.js";

const Css = {
  
};

let ChooseFood = createVisualComponent({
  uu5Tag: Config.TAG + "ChooseFood",
  propTypes: {},
  defaultProps: {},

  render(props) {
    const { identity } = useSession();
    console.log(identity);

    return (
        <Uu5Elements.Grid 
        templateColumns="repeat(3, 20rem)"
        justifyContent="center"
        alignContent="center">   
          <FoodType title="Raňajky"/>
          <FoodType title="Obed 1"/>
          <FoodType title="Večera"/>
          <FoodType title="Raňajky"/>
          <FoodType title="Obed"/>
          <FoodType title="Večera"/>
        </Uu5Elements.Grid>
    );
  },
});

ChooseFood = withRoute(ChooseFood, { authenticated: true });
export { ChooseFood };
export default ChooseFood;