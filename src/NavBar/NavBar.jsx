import './NavBar.css'
import {Link} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget"

function NavBar () {

    const name = 'Aguirre Carlos'

    return (
        <header className="navbar">
            <h1 className="navbar__title">Bienvenido! {name}</h1>

            <nav className="navbar__nav">
                <ul className="navbar__list">
                    <li className="navbar__item"><Link to="/">Inicio</Link></li>
                    <li className="navbar__item"><Link to="/category/frontend">Frontend</Link></li>
                    <li className="navbar__item"><Link to="/category/backend">Backend</Link></li>
                </ul>
            </nav>

            <p className="navbar__message">
                Muchos Éxitos en tu nuevo curso React JS
            </p>

            <CartWidget />
        </header>
    )
}

export default NavBar