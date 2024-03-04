//@@viewOn:imports
import { createVisualComponent, createComponent, PropTypes, useAppBackground, useState, Fragment, LoremIpsum, useSession } from "uu5g05";
import { SubmitButton, Color } from "uu5g05-forms";

import { UserContext } from "../provider/UserProvider";
import { useContext } from "react";

import Calls from "../../calls";
import Config from "../../bricks/config/config";
import Uu5Elements, { Button } from "uu5g05-elements";
//@@viewOff:imports

//@@viewOn:constants

const ModalOnButton = createComponent({
    render({ header, ...props }) {
      const {logout} = useSession();
      const [open, setOpen] = useState();

      const Css = {
        footer: () => Config.Css.css`
            display: flex;
            justify-content: space-between;
        `
      }

      return (
        <Fragment>
          <Uu5Elements.Button onClick={() => setOpen(true)} size="xxs">{header}</Uu5Elements.Button>
          <Uu5Elements.Modal {...props} header={header} open={open} onClose={() => setOpen(false)} footer={
            <Uu5Elements.Box shape="interactiveItem" className={Css.footer()}>
                <Button  icon="mdi-exit-run" colorScheme="negative" significance="highlighted" onClick={()=>logout()}>Odhlásiť sa</Button>
                <SubmitButton icon="uugds-check" onClick={() => setOpen(false)}>Potvrdiť</SubmitButton>
            </Uu5Elements.Box>
          }> 
            {props.children || <LoremIpsum paragraphCount={10} />}
          </Uu5Elements.Modal>
        </Fragment>
      );
    },
});

const ThemeToggle = createVisualComponent({
    uu5Tag: "ThemeToggle",

    propTypes: {user: PropTypes.object},
    defaultProps: {user: null},
  
    render(props) {
      const { user } = props;
      const [background, setBackground] = useAppBackground();
      const darkMode = background === "dark";

      const Css = {
        main: () => Config.Css.css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        `
        };
  
      return (
        <div className={Css.main()}>
            <Uu5Elements.Text category="interface" segment="highlight" type="major">
                Vzhľad
            </Uu5Elements.Text>
            <Uu5Elements.Toggle
                value={!darkMode}
                onChange={() => {
                    const backgroundColor = darkMode ? "#ffffff" : "#212121";
                    setBackground({backgroundColor});

                    user.preferences.theme = backgroundColor;
                    Calls.updateUser({...user});
                }}
                iconOff="uugdsstencil-weather-moon"
                iconOn="uugdsstencil-weather-sun"
            />
        </div>
      )
    }
});

const PrimaryColor = createVisualComponent({
    propTypes: {user: PropTypes.object},
    defaultProps: {user: null},
    render(props){
        const { user } = props;
        const userContext = useContext(UserContext);

        const Css =  {
            main: () => Config.Css.css`
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: fit-content;
            `,
            colorPicker: () => Config.Css.css`
                width: 22rem;
            `
        }

        function withControlledInput(Component) {
            return (props) => {
              const { color: propsColor, onSelect } = props;
              const [color, setColor] = useState(propsColor);
    
              return (
                <div>
                  <Component
                    {...props}
                    value={color}
                    onSelect={(e) => {
                      typeof onSelect === "function" && onSelect(e);
                      setColor(e.data.value);

                      userContext.user.preferences.color = e.data;
                      userContext.setUser({...userContext.user});
                      Calls.updateUser({...userContext.user});
                    }}
                  />
                </div>
              );
            };
          }
    
          const ColorsPicker = withControlledInput(Color.Picker);

        return(
            <Uu5Elements.Box className={Css.main()} shape="interactiveItem">
                <Uu5Elements.Text category="interface" segment="highlight" type="major">
                    Farba
                </Uu5Elements.Text>
                <ColorsPicker className={Css.colorPicker()} valueType="colorScheme" />
            </Uu5Elements.Box>
        );
    }
});

const NavUser = createVisualComponent({
    uu5Tag: "NavUser",

    propTypes: { user: PropTypes.object },
    defaultProps: { user: null },
  
    render(props) {
        const { user } = props;
        const Css = {
            main: () => Config.Css.css`
                display: flex;
                justify-content: left;
                align-items: center;

                gap: 0.5rem;
                width: fit-content;
                height: 2rem;
            `,
            image: () => Config.Css.css`
                border-radius: 50%;
                height: 100%;
            `,
            right: () => Config.Css.css`
                display: flex;
                flex-direction: column;
            `,
            name: () => Config.Css.css`
                text-wrap: nowrap;
                width: fit-content;
            `,
            settings: () => Config.Css.css`
                text-wrap: nowrap;
            `
        };
  
        return (
            <div className={Css.main()}>
                <img className={Css.image()} alt="User Image" src="https://cdn.plus4u.net/uu-plus4u5g01/4.0.0/assets/img/anonymous.png" />
                <div className={Css.right()}>
                    <Uu5Elements.Text className={Css.name()} category="interface" segment="highlight" type="common">{user.name}</Uu5Elements.Text>
                    <ModalOnButton header="Možnosti" width="35rem" children={
                        <Uu5Elements.Box shape="interactiveItem">
                            <ThemeToggle user={user} />
                            <PrimaryColor user={user} />
                        </Uu5Elements.Box>
                    } />
                </div>
            </div>
        )
    }
  });
//@@viewOff:constants

//@@viewOn:css
const Css = {
    nav: (user) => Config.Css.css`
        background: ${user.preferences.theme !== "#ffffff" ? "rgb(50, 50, 50)" : "rgb(240, 240, 240)"};
        border-image: ${user.preferences.color.cssColor} 1;
        border-bottom: solid silver 0.2rem;

        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;
        height: 4.5rem;
        padding: 1rem;
    `,
    logo: () => Config.Css.css`
        height: 150%;
    `,
    children: (user) => Config.Css.css`
        background: ${user.preferences.theme !== "#ffffff" ? "rgb(33, 33, 33)" : "white"};

        border-radius: 0.75rem 0.75rem 0 0;
        border-image: ${user.preferences.color.cssColor} 1;
        border-top: solid 0.2rem;
        border-right: solid 0.2rem;
        border-left: solid 0.2rem;

        display: flex;
        align-items: center;

        width: 100%;
        height: 160%;
        margin: 0 1rem -1rem 1rem;
        padding: 0 0.3rem 0 0.3rem;
    `
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const NavBar = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "NavBar",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    children: PropTypes.element
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    children: null
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;

    const userContext = useContext(UserContext);
    const user = userContext.user;

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
        <div className={Css.nav(user)}>
            <Uu5Elements.Svg 
                uri={user.preferences.theme !== "#ffffff" ? "assets/images/logo/dark.png" : "assets/images/logo/light.png"} 
                className={Css.logo()}
                type="img" />
            {children ? 
                <div className={Css.children(user)}>
                    {children}
                </div> 
            : null}
            <NavUser user={user} />
        </div>
    );
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { NavBar };
export default NavBar;
//@@viewOff:exports
