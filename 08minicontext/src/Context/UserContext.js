import React from 'react'

const UserContext =  React.createContext() //creating a context component and we have not given any default value 


export default UserContext;



//Based on the search results, "React.createContext()" and "createContext" are essentially the same function, as they are both provided by React’s Context API. The main difference lies in the context in which they are used.

//"React.createContext() "is the official method provided by React, whereas "createContext" might be a shorthand or an alias used in certain situations or libraries. However, both methods serve the same purpose: creating a Context object that enables components to share state and props throughout the component tree.