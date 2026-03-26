import './NavBar.css'
import {Link} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"

function NavBar () {

    const name = 'Aguirre Carlos'

    return (
        <header className="navbar">
            
            <h1 className="navbar__title">Bienvenido a tus cursos preferidos!</h1>
            <h2 className="navbar__title">Hola! {name}</h2>

            <nav className="navbar__nav">
                <ul className="navbar__list">
                    <li className="navbar__item"><Link to="/">Todos</Link></li>
                    <li className="navbar__item"><Link to="/category/Lenguaje">Lenguajes</Link></li>
                    <li className="navbar__item"><Link to="/category/Framework">Frameworks</Link></li>
                </ul>
            </nav>

            <p className="navbar__message">
                Muchos Éxitos en tu ruta de aprendizaje
            </p>

            <CartWidget />
        </header>
    )
}

export default NavBar