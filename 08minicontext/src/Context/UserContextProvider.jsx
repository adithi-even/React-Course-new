import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{
    const [user,setUser] = React.useState(null)//what ever the API call u wanna do ? do it here only and then use in the value of the Use.Provider //State Initialization: This initializes a state variable named user with an initial value of null. This is common when you don't have user data yet (e.g., when a user is not logged in).// State Setter Function: setUser is a function that allows you to update the user state. You can call setUser(newUser) to change the value of user to newUser.
    return(
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    )

}




