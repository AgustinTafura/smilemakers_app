import { useEffect, useContext, useState } from 'react'
import { useLocation } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import './index.scss'


const Login = () => {
    
    const locationPrams = new URLSearchParams(useLocation().search);
    const {urlHostLogin, logInWhitGoogleCredentials, logInWhitGoogle} = useContext(UserContext)
    const submitLogin =  (e)=>{
        e.preventDefault()
        logInWhitGoogle()
        
        // urlHostLogin().then(data=>window.location.replace(data))
    }
    if(locationPrams.get('credential') != undefined) {
        logInWhitGoogleCredentials(locationPrams.get('credential'))
    }

    return (
        <section className='container'>
            <main className="form-access col-11  col-md-8 col-lg-6 ">
                <div className='header-form'>
                    <div id='logo'>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="smilemakers brand logo " />
                    </div>
                </div>
        
                <form onSubmit={(e)=>submitLogin(e)} className='container col-12 col-sm-10 col-md-9'>

                    <div className="description">
                        Ingresa con tu cuenta de Google.<br />
                        Es el método más rápido para comenzar conectando tu Calendario automaticamente!
                    </div>

                    <div className='action-button d-flex justify-content-center'>

                        <button type='submit' className="btn btn-primary"> 
                            <i className="fab fa-google"></i> Ingresar con Google
                        </button>
                    </div>

                    <small>
                        (Será redirigido a la página de Google)
                    </small>
                </form>
            </main>
        </section>
    )
}

export default Login