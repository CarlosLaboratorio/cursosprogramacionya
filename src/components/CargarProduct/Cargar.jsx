import { Button } from "antd"
import { db } from "../../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"

function Cargar() {


    const handleAgregarProducto = () => {
        console.log("Agrego producto!")

        //1) conexion a db
        //const db = getFirestore(app)

        const nombre_de_collection = "products"

        //2) referencia a una collection
        //const collection = collection(db,"nombre")
        const productCollection = collection(db, nombre_de_collection)

        //3) la consulta (CRUD)
        //addDoc() - getDoc() - getDocs() - updateDoc() - deleteDoc()
        const mi_consulta = addDoc(productCollection, {
        "id": 25,
        "name": "Cobol",
        "img": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cobol/cobol-original.svg",
        "type": "Lenguaje",
        "popularity": 12.6,
        "description": "Lenguaje de programación de alto nivel para el desarrollo de aplicaciones empresariales.",
        "price": 180
        })

        mi_consulta
            .then((data) => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <Button onClick={handleAgregarProducto}>Cargar producto</Button>
        </div>
    )
}

export default Cargar