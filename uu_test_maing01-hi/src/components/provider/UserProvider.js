import { useAppBackground, useSession, useState, useEffect } from "uu5g05";
import { withRoute } from "uu_plus4u5g02-app";
import { createContext } from "react";
import Calls from "../../calls";

export const UserContext = createContext();

let UserProvider = ({ children }) => {
    const { identity } = useSession();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [background, setBackground] = useAppBackground();

    useEffect(
        () => {
          Calls.checkUser({id: identity.uuIdentity, name: identity.name}).then((data)=>{
            
            // set background color
            const darkMode = data.user.preferences.theme === "#ffffff";
            const backgroundColor = darkMode ? "#ffffff" : "#212121";
            setBackground({backgroundColor});

            setUser(data.user);
          });
          setLoading(false);
        },
        [identity] // executed on component mount
    );
    
    return <div>
      {loading ? (<h1/>) : <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>}
    </div>
};

UserProvider = withRoute(UserProvider, { authenticated: true });
export { UserProvider };