//@@viewOn:imports
import { BackgroundProvider, createVisualComponent, useSession, useEffect } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

import Calls from "../calls.js";
import FoodType from "../bricks/chooseFood/foodType.js";
import FoodCont from "../bricks/chooseFood/foodCont.js";

const Css = {
  panel: () =>
    Config.Css.css`
      background-image: url(${"../assets/images/menu/bg.jpg"});
      background-position: center;
      background-size: cover;
      position: absolute;
      width: 100%;
      height: 100%;
    `,
  grid: () =>
    Config.Css.css`
      background-color: rgba(0, 0, 0, 0.7);

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
      background-color: rgb(50, 50, 50);
    `
};

const schools = FoodCont.getSchools();
let schoolTabs = [];
for(let i=0;i<schools.length;i++){
    schoolTabs.push({label:schools[i].name, children:(
      <div className={Css.panel()}>
        <div className={Css.grid()}>
          {schools[i].foodTypes.map(type =>(
              <FoodType title={type.title} school={schools[i].name}/>
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
      <BackgroundProvider background="dark">
        <Uu5Elements.Tabs type="line" className={Css.Tabs()} itemList={schoolTabs} 
          actionList={[{icon:'uugds-check', children:'Pokračovať', onClick: ()=>{Calls.generatePDF(FoodCont.getSchools())}}]}/> 
      </BackgroundProvider>
    );
  },
});

ChooseFood = withRoute(ChooseFood, { authenticated: true });
export { ChooseFood };
export default ChooseFood;