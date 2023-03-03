import { createContext,useState } from "react";

export const AccountContext = createContext(null);

export default function AccountProvider({children}){
    const [user,SetUser] = useState();
    return(
        <AccountContext.Provider value={{
            user,
            SetUser
        }}>
        {children}
        </AccountContext.Provider>
    )
}