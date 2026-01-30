import CartWidget from "./CartWidget"

function NavBar () {

    const name = 'Aguirre Carlos'

    return (
        
        <>

        <header className="container">
            <h1>Bienvenido! {name}</h1>
            <nav>
                <ul>
                    <li><a href="./home.html">Inicio</a></li>
                    <li><a href="./cursos.html">Cursos</a></li>
                    <li><a href="./contacto.html">Contacto</a></li>
                </ul>
            </nav>
            <p style={{color:'blue',fontSize:20}}>Muchos Exitos en tu nuevo curso React JS</p>
        </header>

        <CartWidget />

        </>
    )
}   

export default NavBar