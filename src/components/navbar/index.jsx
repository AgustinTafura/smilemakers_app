//custom styles
import './index.scss'
import $ from 'jquery'
import { useEffect } from 'react'




const Navbar = () => {

    const navBarColor = ()=>{
        var navbar = document.getElementById('navbar')
        var main = document.querySelector("main")
        window.scrollY > main.offsetTop ? (navbar.classList.add('bg-white')): (navbar.classList.remove('bg-white'))
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
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light d-flex justify-content-between fixed-top ">
            <div id='logo'>
                <a className="navbar-brand" href="#carouselHome"><img src="./assets/img/logo.png" alt="" /></a>
            </div>

            <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                <ul className="navbar-nav text-center nav nav-pills">
                <li className="nav-item">
                    <a className="nav-link" href="#que-son">Alineadores</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#tratamiento">Tratamiento</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#beneficios">Beneficios</a>
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
