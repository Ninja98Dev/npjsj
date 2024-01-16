//@@viewOn:imports
import { createVisualComponent, useSession } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

import FoodType from "../bricks/chooseFood/foodType.js";

import BackButton from "./backButton.js"

const Css = {
  panel: () =>
    Config.Css.css`
      background-image: url(${"../assets/images/menu/bg.jpg"});
      background-position: center;
      background-size: cover;
      position: absolute;
      height: 100%;
    `,
  grid: () =>
    Config.Css.css`
      background-color: rgba(0, 0, 0, 0.7);
      height: 100%;
    `,  
};

let ChooseFood = createVisualComponent({
  uu5Tag: Config.TAG + "ChooseFood",
  propTypes: {},
  defaultProps: {},

  render(props) {
    const { identity } = useSession();

    return (
      <div className={Css.panel()}>
        <Uu5Elements.Grid 
        templateColumns="repeat(3, 20rem)"
        justifyContent="center"
        alignContent="center"
        className={Css.grid()}>
          <FoodType title="Raňajky"/>
          <FoodType title="Desiata"/>
          <FoodType title="Obed 1"/>
          <FoodType title="Obed 2"/>
          <FoodType title="Olovrant"/>
          <FoodType title="Večera"/>
        </Uu5Elements.Grid>
		{BackButton()}
      </div>
    );
  },
});

ChooseFood = withRoute(ChooseFood, { authenticated: true });
export { ChooseFood };
export default ChooseFood;