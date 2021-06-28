import { useEffect, useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext';



const Test = () => {

    
    const {logInWhitGoogle} = useContext(UserContext)

    
useEffect(() => {
    logInWhitGoogle()
}, [])
    return (
        < >
            TEST
        </>
    )
}

export default Test