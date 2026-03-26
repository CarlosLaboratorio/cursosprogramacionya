import { NavLink } from "react-router";
import './Header.css'
import CartWidget from "../CartWidget/CartWidget";
// import { Button } from "antd";
// import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebaseConfig";
// import { useEffect } from "react";

function Header() {

    // useEffect(() => {

    //     onAuthStateChanged(auth, (user) => {
    //         console.log(user)
    //     })

    // }, [])

    // const handleSignIn = () => {
    //     signInWithEmailAndPassword(auth, "anibal@gmail.com", "Abc_1234")
    //         .then(() => {
    //             //redireccion a la pagina de perfil
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    //Vista
    return (
        <header className="navbar">
                <h1 className="navbar__title">Bienvenido a tus cursos preferidos!</h1>
                <h2 className="navbar__title">Hola! Aguirre Carlos</h2>
            <div className="navbar__nav">
                <nav className="navbar__list">
                    <NavLink className="navbar__item" to="/">Todos</NavLink>
                    <NavLink className="navbar__item" to="/category/Lenguaje">Lenguajes</NavLink>
                    <NavLink className="navbar__item" to="/category/Framework">Frameworks</NavLink>

                </nav>
                {/* <Button onClick={handleSignIn}>Sign in</Button> */}
                
                <CartWidget />

                <p className="navbar__message">
                    Muchos Éxitos en tu ruta de aprendizaje
                </p>
            </div>
        </header>
    )
}

export default Header