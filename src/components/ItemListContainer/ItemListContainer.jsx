import { useEffect,useState } from "react"
import ItemCard from "../Item/ItemCard"
import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"

function ItemListContainer ({greeting}) {

    const {categoryId} = useParams()
    const [products,setProducts] = useState([])

    useEffect(() => {

        const productsCollection = collection(db, "products")

        let q

        if (categoryId) {
            q = query(
                productsCollection,
                where("type", "==", categoryId) // 🔥 clave
            )
        } else {
            q = productsCollection
        }

        getDocs(q)
            .then((res) => {
                const products = res.docs.map(doc => ({
                    
                    id: doc.id,
                    ...doc.data()
                }))
                setProducts(products)
            })
    }, [categoryId])

    return (
        <div className="container">
            <h2 className="msj__subtitle">{greeting}</h2>
            {categoryId && <p>Categoria seleccionada: {categoryId}</p>}
            <div className="card-container">
                {products.map((product)=>(
                    <ItemCard key={product.id} product={product} />
                ))
                }
            </div>
        </div>
    )

}

export default ItemListContainer