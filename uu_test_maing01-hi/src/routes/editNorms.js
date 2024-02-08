//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";
import { BackButton } from "./backButton.js";

const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
};

let EditNorms = createVisualComponent({
  uu5Tag: Config.TAG + "EditNorms",
  propTypes: {},
  defaultProps: {},

  render(props) {
    const { identity } = useSession();

    return (
        <Uu5Elements.Grid 
        templateColumns="repeat(2, 20rem)"
        justifyContent="center"
        alignContent="center">
            <h1>Úprava jedál</h1>
            {BackButton()}
        </Uu5Elements.Grid>
    );
  },
});

EditNorms = withRoute(EditNorms, { authenticated: true });
export { EditNorms };
export default EditNorms;