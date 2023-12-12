//@@viewOn:imports
import { createVisualComponent, createComponent, Fragment, useState, PropTypes } from "uu5g05";

import Config from "../config/config.js";
import Uu5Elements, { Number } from "uu5g05-elements";

import ButtonToolTip from "../buttonToolTip.js";

//@@viewOff:imports

//@@viewOn:constants
const ModalOnButton = createComponent({
    render({ header, buttonProps, ...props }) {
      const [open, setOpen] = useState();

      return (
        <Fragment>
          <ButtonToolTip {...buttonProps} onClick={() => setOpen(true)}/> 
          <Uu5Elements.Modal {...props} header={header} open={open} onClose={() => setOpen(false)}>
            {props.children}
          </Uu5Elements.Modal>
        </Fragment>
      );

    },
  });
//@@viewOff:constants

//@@viewOn:css
const Css = {
    main: () =>
        Config.Css.css`
            display: flex;
            flex-direction: column;
            align-items: center;
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
    buttonProps: PropTypes.object,
    header: PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    buttonProps: undefined,
    header: "Vyber jedla"
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { buttonProps, header } = props;

    let dataObject = useDataObject({
        handlerMap: {
          loadFood: (...args) => {
            return Calls.getAllFoods(...args);
          },
        },
    });
    let { state, data, errorData, pendingData, handlerMap } = dataObject;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
        <ModalOnButton buttonProps={buttonProps} header={header} collapsible={false}>
            <div className={Css.main()}>
                <Uu5Elements.Input type={"search"} placeholder={"Vyhľadaj jedlo"} className={Css.input()}/>
                <Uu5Elements.ScrollableBox maxHeight="11.1rem">

                </Uu5Elements.ScrollableBox> 
            </div>
        </ModalOnButton>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { FoodPicker };
export default FoodPicker;
//@@viewOff:exports
