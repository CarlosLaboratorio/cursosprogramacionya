import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { CartContext } from "../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"

function ItemDetail() {

    const { itemId } = useParams()
    const { addToCart } = useContext(CartContext)

    const [product, setProduct] = useState(null)

    const handleAdd = (quantity) => {
        addToCart({ ...product, quantity })
    }

    useEffect(() => {

        const productRef = doc(db, "products", itemId)

        getDoc(productRef)
            .then((res) => {
                if (res.exists()) {
                    setProduct({ id: res.id, ...res.data() })
                } else {
                    console.error("Producto no encontrado")
                    console.log("ID recibido:", itemId)
                }
            })
            .catch((error) => {
                console.error("Error al obtener el producto:", error)
            })

    }, [itemId])

    if (!product) return <h2>Cargando...</h2>

    return (
        <div className='detail container'>

            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} className="detail__image" />
            <p>{product.description}</p>
            <p>Popularidad: {product.popularity}%</p>
            <p>Precio: ${product.price}</p>

            <ItemCount onAdd={handleAdd} />

        </div>
    )
}

export default ItemDetail
