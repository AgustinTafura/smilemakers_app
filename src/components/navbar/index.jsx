//custom styles
import './index.scss'
import $ from 'jquery'

const Navbar = () => {


    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light d-flex justify-content-between fixed-top ">
            <div id='logo'>
                <a className="navbar-brand" href="#home"><img src="./assets/img/logo.png" alt="" /></a>
            </div>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul className="navbar-nav text-center nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="#que-son">Qué Son</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#tratamiento">Tratamiento</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#ventajas">Primer Consulta</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#profesional">Soy Odontólogo</a>
                </li>
                </ul>
            </div>

        </nav>                  
    )
}

export default Navbar
