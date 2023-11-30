//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

const Css = {
  icon: () =>
    Config.Css.css({
      fontSize: 48,
      lineHeight: "1em",
    }),
  background: "black",
  
};

let Home = createVisualComponent({
  uu5Tag: Config.TAG + "Home",
  propTypes: {},
  defaultProps: {},

  render(props) {
    const { identity } = useSession();
    console.log(identity);

    return (
        <Uu5Elements.Grid
        templateColumns="repeat(2, 20rem)"
        justifyContent="center"
        alignContent="center">
            <Uu5Elements.Button href={"./chooseFood"} size="xl" colorScheme="primary" effect="ground">VYBER JEDLA</Uu5Elements.Button>
            <Uu5Elements.Button href={"./editNorms"} size="xl" colorScheme="primary" effect="ground">UPRAVA NORIEM</Uu5Elements.Button>
            <Uu5Elements.Button href={"./stats"} size="xl" colorScheme="primary">ŠTATISTIKA</Uu5Elements.Button>
        </Uu5Elements.Grid>
    );
  },
});

Home = withRoute(Home, { authenticated: true });
export { Home };
export default Home;