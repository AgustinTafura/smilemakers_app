import { createContext, useEffect, useState, } from "react";
// import { auth } from "../firebase";
// import firebase from "firebase/app";



export const UserContext = createContext();




export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false) 

   

    return (
        <UserContext.Provider value={{isAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}

