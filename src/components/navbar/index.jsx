//custom styles
import './index.scss'
import $ from 'jquery'
import { useContext, useEffect } from 'react'
import { Link,withRouter  } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'



const Navbar = (props) => {

    const { user, logOut } = useContext(UserContext)
    const {history} = props;
    const navBarColor = ()=>{
        var navbar = document.getElementById('navbar')
        var main = document.querySelector("main")
        window.scrollY > main.offsetTop ? (navbar.classList.add('bg-white')): (navbar.classList.remove('bg-white'))
    }


    const logout = () => {
        
        logOut();
        console.log(123)
        $('#logoutModal').modal("hide");
        history.push("/")
    }
    
    useEffect(() => {
        const navLinks = Array.from(document.querySelectorAll("nav a"))
        
        //navbarToggle
        navLinks.map(link=>link.addEventListener('click', ()=>{window.innerWidth < 768 && $('.collapse').collapse('hide')}))
        
        //on Scroll
        window.addEventListener('scroll',navBarColor)

        
        return()=>{
            //clean listeners
            window.removeEventListener('scroll',navBarColor)
            navLinks.map(link=>link.removeEventListener('click', ()=>{window.innerWidth < 768 && $('.collapse').collapse('hide')}))
        }
    }, [])


    return (
        <>
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light d-flex justify-content-between fixed-top ">
                <div id='logo'>
                    <Link className="navbar-brand" to={"#carouselHome"}><img src={`${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="" /></Link>
                </div>

                <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                    <ul className="navbar-nav text-center nav nav-pills">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/#que-son"}>Alineadores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/#tratamiento"}>Tratamiento</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/#beneficios"}>Beneficios</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/turnos"}>Primer Consulta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/profesional"}>Soy Odontólogo</Link>
                        </li>

                        {user&&
                            <li className="nav-item dropdown no-arrow">
                                <Link className="nav-link dropdown-toggle" to={"/change"}
                                    id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 text-uppercase">{user.email}</span>
                                        {/* <img className="img-profile rounded-circle" src="img/undraw_profile.svg"/> */}
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in text-uppercase" aria-labelledby="userDropdown">
                                        <Link className="dropdown-item" to="/welcome">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" aria-hidden="true"></i>
                                            <span className="item-text">MIS DATOS</span>
                                        </Link>
                                        <Link className="dropdown-item" to={"/change"}>
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" aria-hidden="true"></i>
                                            <span className="item-text">CONFIGURACIÓN</span>
                                        </Link>
                                        <Link className="dropdown-item" to={"/change"}>
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" aria-hidden="true"></i>
                                            <span className="item-text">MI ACTIVIDAD</span>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <button className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" aria-hidden="true"></i>
                                            <span className="item-text">CERRAR SESIÓN</span>
                                        </button>
                                </div>
                            </li>
                        }
                    </ul>
                </div>



            </nav>       
        
            {/* <!-- Logout Modal--> */}
            <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Estas seguro que desas salir?</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    {/* <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div> */}
                    <div className="modal-footer">
                        <button className="btn-solid-lg btn-light" type="button" data-dismiss="modal">Cancel</button>
                        <button onClick={()=>{logout()}} className="btn-solid-lg " id="logOutButton">Logout</button>

                    </div>
                </div>
            </div>
            </div>
        </>
    )

}

export default withRouter(Navbar)
