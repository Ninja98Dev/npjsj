//@@viewOn:imports
import { BackgroundProvider, createVisualComponent, useSession, useEffect } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import NavBar from "../components/main/navbar";

import Calls from "../calls.js";
import FoodType from "../bricks/chooseFood/foodType.js";
import FoodCont from "../bricks/chooseFood/foodCont.js";

const Css = {
  panel: () =>
    Config.Css.css`
      position: absolute;
      left: 0;
      width: 100%;
      height: 100%;
      margin-top: 0.1rem;
    `,
  grid: () =>
    Config.Css.css`
      justify-content: center;
      align-items: center;
      display: flex;
      flex-wrap: wrap;

      gap: 1rem;
      width: 100%;
      min-height: 100%;
      height: fit-content;
    `,  
  Tabs: () =>
    Config.Css.css`
      width: 100%;
      margin-top: -0.3rem;
    `
};

const schools = FoodCont.getSchools();
let schoolTabs = [];
for(let i=0;i<schools.length;i++){
    schoolTabs.push({label:schools[i].name, children:(
      <div className={Css.panel()}>
        <div className={Css.grid()}>
          {schools[i].foodTypes.map((type, index) =>(
              <FoodType key={index} title={type.title} school={schools[i].name}/>
            ))}
        </div>
      </div>
    )});
}

let ChooseFood = createVisualComponent({
  uu5Tag: Config.TAG + "ChooseFood",
  propTypes: {},
  defaultProps: {},

  render(props) {
    const { identity } = useSession();

    return (
      <NavBar children={
        <Uu5Elements.Tabs type="card-outer" className={Css.Tabs()} itemList={schoolTabs} 
          actionList={[{icon:'uugds-check', children:'Generovať', onClick: ()=>{Calls.generatePDF(FoodCont.getSchools())}}]}/>
      }/>
    );
  },
});


ChooseFood = withRoute(ChooseFood, { authenticated: true });
export { ChooseFood };
export default ChooseFood;