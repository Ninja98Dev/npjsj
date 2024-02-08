//@@viewOn:imports
import Uu5, { createVisualComponent, useDataObject, Fragment, useState, PropTypes } from "uu5g05";

import Calls from "../../calls.js";
import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";

import ButtonToolTip from "../buttonToolTip.js";

//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
    main: () =>
        Config.Css.css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `,
    resultGrid: () =>
        Config.Css.css`
          display: flex;
          flex-direction: column;
          justify-content: start;
          align-items: center;
          width: 35rem;
          height: 30rem;
        `,
    item: () =>
        Config.Css.css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: solid 0.1rem black;
          padding: 0 0.5rem 0 0;
          width: 100%;
        `,
    input: () =>
        Config.Css.css`
          width: 35rem;
        `
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const FoodPicker = createVisualComponent({
  //@@viewOn:statics
  
  uu5Tag: Config.TAG + "FoodPicker",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    category: PropTypes.string,
    subcategories: PropTypes.array,
    icon: PropTypes.string,
    addFood: PropTypes.func
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    category: "None",
    subcategories: [""],
    icon: undefined,
    addFood: undefined
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { 
      category,
      subcategories,
      icon,
      addFood
     } = props;

    let dataObject = useDataObject({
        handlerMap: {
          searchFood: (...args) => {
            return Calls.serachInFood(...args);
          },
        },
    });
    let { state, data, errorData, pendingData, handlerMap } = dataObject;

    const [open, setOpen] = useState();
    const allCategories = subcategories.toString()
      .replaceAll("Pokrmy ", "")
      .replaceAll("mäsa", "")
      .replaceAll(",", ", ")
      .replace("z", "Z");
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <Fragment>
          <ButtonToolTip tip={category} icon={icon} effect="upper" onClick={() => setOpen(true)}/> 
          <Uu5Elements.Modal {...props} header={(<Uu5Elements.InfoItem title={category} subtitle={allCategories} />)} open={open} onClose={() => setOpen(false)}>
            <Uu5Elements.Grid className={Css.main()}>
              <Uu5Elements.Input type="search" placeholder="Vyhľadaj jedlo" className={Css.input()} onChange={(input) => 
                state === "ready" || state === "readyNoData" ? handlerMap.searchFood({nazov: input.data.value, kategoria: [category, ...subcategories]}) : null } />
              <Uu5Elements.ScrollableBox maxHeight="30rem">
                <Uu5Elements.Grid className={Css.resultGrid()} templateColumns="repeat(1, 1fr)" flow="row" rowGap="0">
                  {data ? (
                    data.itemList.length > 0 ? data.itemList.map((food) => (
                      <Uu5Elements.Grid.Item key={food.id} className={Css.item()}>
                        <Uu5Elements.InfoItem title={food.nazov} subtitle={food.kategoria}/>
                        <Uu5Elements.Button icon="uugds-plus" effect="upper" size="xs" colorScheme="blue" onClick={() => {addFood(food, icon); setOpen(false)}}>Pridať</Uu5Elements.Button>
                      </Uu5Elements.Grid.Item>
                      )) : <p>Požadované jedlo sa nenašlo</p>
                  ) : <p>Vyhľadaj jedlo</p> }
                </ Uu5Elements.Grid>
              </Uu5Elements.ScrollableBox> 
            </Uu5Elements.Grid>
              {props.children}
          </Uu5Elements.Modal>
        </Fragment>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FoodPicker };
export default FoodPicker;
//@@viewOff:exports
