import { createContext, useEffect, useState, } from "react";
import { auth } from "../firebase";
import firebase from "firebase/app";
import axios from 'axios';


export const UserContext = createContext();





export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false) 
    
    useEffect(() => {
        auth.onAuthStateChanged(function(user) {  
            if (user) {
                console.log('hay user', user)
                console.log('idToke', user.getIdToken())
                setUser(user)
            } else {
                console.log('LOGOUT')
                setUser(false)
            }
        })
    }, [])

    const logInWhitGoogle = ()=> {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope( 'https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/userinfo.profile'
        )
        provider.setCustomParameters({
            prompt: 'consent',
            access_type: 'offline',
            include_granted_scopes: 'true'
          });
          firebase.auth().signInWithPopup(provider).then((result) => {
            console.log(result)
            // var credential = result.credential;
        
            // // This gives you a Google Access Token. You can use it to access the Google API.
            // var token = credential.accessToken;
            // // The signed-in user info.
            // var user = result.user;
            // console.log(credential,token,user, result)
        })
            
    }

    const logInWhitGoogleCredentials = (data)=> {
       const credential = firebase.auth.GoogleAuthProvider.credential(data);

          
        return auth.signInWithCredential(credential).then(user=>setUser(user)).catch(err=>console.log(err))

            
    }

    const logOut = ()=> {
        auth.signOut().then( 
            console.log('sesion cerrada')
        )
            
    }

    const urlHostLogin = async ()=> {
        
        var url = await axios.get('http://localhost:4000/loginHost')
        .then(response=>response.data.authUrl)
        return url
    }


    return (
        <UserContext.Provider value={{isAuthenticated, user, logOut, logInWhitGoogle, urlHostLogin, logInWhitGoogleCredentials}}>
            {children}
        </UserContext.Provider>
    )
}

