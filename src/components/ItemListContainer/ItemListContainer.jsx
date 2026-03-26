import { useEffect,useState } from "react"
import productsData from "../../assets/products.json"
import ItemCard from "../Item/ItemCard"
import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'

function ItemListContainer ({greeting}) {

    const {categoryId} = useParams()
    const [products,setProducts] = useState([])

    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {

                // Simulación de error
                const error = false

                if (error) {
                    reject("Error al obtener los productos")
                } else {
                    resolve(productsData)
                }

            }, 500)
        })

        getProducts
            .then((res) => {
                if (categoryId) {
                    const filtered = res.filter(
                        (prod) =>
                            prod.type.toLowerCase() === categoryId.toLowerCase()
                    )
                    setProducts(filtered)
                } else {
                    setProducts(res)
                }
            })
            .catch((error) => {
                console.error("Error:", error)
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