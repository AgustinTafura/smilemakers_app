
import { useState } from 'react'
import './index.scss'

const Login = () => {

    const [login, setLogin] = useState(true)
    const [email, setEmail] = useState(false)
    const [loginGoogle, setLoginGoogle] = useState(false)

    const CheckEmail = (e)=>{
        var email = document.getElementById('profesional-email').value.toLowerCase();
        e.preventDefault()
        
        email.includes('@gmail') && setLoginGoogle(true);
        setEmail(email)
    }

    
    return (
        <section className='container'>     
            <main className="form-access col-12  col-md-10 col-lg-6 ">
                <div className='header-form'>
                    <div id='logo'>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="smilemakers brand logo " />
                    </div>
                    {
                        email?
                            <div>{login?'Ingresa':'Crea'} a tu cuenta Profesional SM</div>
                        :   <div>Hola {email}!</div>
                    }
                </div>

                <form onSubmit={CheckEmail} className='container col-12 col-sm-10 col-md-9'>
                    
                    <div className="form-group">
                        <label htmlFor="profesional-email">Ingresa tu email para comenzar</label>
                        <input required type="email" className="form-control" id="profesional-email" name="profesional-email" aria-describedby="emailHelp" placeholder="Email"/>
                    </div>
                    
                    <div className='action-button d-flex justify-content-end'>

                        {email?
                            loginGoogle?
                                <button type="submit" className="btn btn-primary btn-google"> <i className="fab fa-google"></i> Ingresar con Google</button> 
                            :   <button type="submit" className="btn btn-primary ">Continuar</button>
                        :
                            
                            (<button type="submit" className="btn btn-primary ">Ingresar</button>)
                        }

                        
                        
                    </div>    
                        
                    <small id="emailHelp" className="form-text text-muted">
                        {login?'¿No':'¿Ya'} tienes una cuenta? 
                        <a href="" onClick={(e)=>{e.preventDefault();setLogin(!login)}} >{login?' Registrarse':' Ingresar'}</a>
                    </small>
                    
                </form>
            </main>
        </section>
    )
}

export default Login
