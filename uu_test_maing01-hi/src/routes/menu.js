//@@viewOn:imports
import { Utils, createVisualComponent, useSession, Lsi } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";

import Config from "./config/config.js";
import Uu5Elements from "uu5g05-elements";

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
      background-color: rgba(0, 0, 0, 0.5);
      height: 100%;
    `,
  button: () =>
    Config.Css.css`
      height: 10rem;
    `,
};

let Home = createVisualComponent({
  uu5Tag: Config.TAG + "Home",
  propTypes: {},
  defaultProps: {},

  render(props) {
    const { identity } = useSession();

    return (
      <div className={Css.panel()}>
        <Uu5Elements.Grid
        templateColumns="repeat(2, 20rem)"
        justifyContent="center"
        alignContent="center"
        className={Css.grid()}>
            <Uu5Elements.Button href={"./chooseFood"} size="xl" significance="highlighted" colorScheme="primary" effect="ground">VYBER JEDLA</Uu5Elements.Button>
            <Uu5Elements.Button href={"./editNorms"} size="xl" significance="highlighted" colorScheme="primary" effect="ground">UPRAVA NORIEM</Uu5Elements.Button>
            <Uu5Elements.Button href={"./stats"} size="xl" significance="highlighted" colorScheme="primary">ŠTATISTIKA</Uu5Elements.Button>
        </Uu5Elements.Grid>
      </div>
    );
  },
});

Home = withRoute(Home, { authenticated: true });
export { Home };
export default Home;