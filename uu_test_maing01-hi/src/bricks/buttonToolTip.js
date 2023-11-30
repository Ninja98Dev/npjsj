//@@viewOn:imports
import { Utils, createVisualComponent, PropTypes, Fragment, useState, useRef } from "uu5g05";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
    button: () => Config.Css.css`
    padding: 0;
`,
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const ButtonToolTip = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "ButtonWithToolTip",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    tip: PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    tip: "Niečo sa mi tu nezdá"
  },
  //@@viewOff:defaultProps

  render(props, children, tooltipProps ) {
    //@@viewOn:private
    const [tooltipSettings, setTooltipSettings] = useState(null);
    const buttonRef = useRef();

    const { tip } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
        <Fragment>
          <Uu5Elements.Button
            {...props}
            className={Css.button()}
            elementRef={buttonRef}
            elementAttrs={{
              onMouseEnter: () => setTooltipSettings({ element: buttonRef.current }),
              onMouseLeave: () => setTooltipSettings(null)
            }}
          >
            {children}
          </Uu5Elements.Button>
          {
            tooltipSettings && (
              <Uu5Elements.Tooltip
                {...tooltipProps}
                {...tooltipSettings}
                delayMs={0}
                preferredPosition={"top-right"}
                onClose={() => setTooltipSettings(null)}
              >
                {tip}
              </Uu5Elements.Tooltip>
            )
          }
        </Fragment>
      );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { ButtonToolTip };
export default ButtonToolTip;
//@@viewOff:exports
