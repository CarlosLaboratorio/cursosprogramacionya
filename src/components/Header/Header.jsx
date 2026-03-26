import { NavLink } from "react-router-dom"
import './Header.css'
import CartWidget from "../CartWidget/CartWidget"

function Header() {
    return (
        <header className="navbar">

            <h1 className="navbar__logo">
                Cursos de Programación
            </h1>

            <nav className="navbar__menu">
                <NavLink className="navbar__item" to="/">Todos</NavLink>
                <NavLink className="navbar__item" to="/category/Lenguaje">Lenguajes</NavLink>
                <NavLink className="navbar__item" to="/category/Framework">Frameworks</NavLink>
            </nav>

            <div className="navbar__cart">
                <CartWidget />
            </div>

        </header>
    )
}

export default Header