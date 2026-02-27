import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

function NavBar () {

    const name = 'Aguirre Carlos'

    return (
        <header className="navbar">
            <h1 className="navbar__title">Bienvenido! {name}</h1>

            <nav className="navbar__nav">
                <ul className="navbar__list">
                    <li className="navbar__item">Inicio</li>
                    <li className="navbar__item">Cursos</li>
                    <li className="navbar__item">Contacto</li>
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