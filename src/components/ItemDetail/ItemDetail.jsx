import { useParams }  from 'react-router-dom'
import { useEffect, useState } from 'react'
import productsData from "../../assets/products.json"
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

function ItemDetail() {
    const {itemId} = useParams()

    const [product,setProduct] = useState(null)

    useEffect (()=>{
        const getProduct = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(productsData.find(p=>p.id === Number(itemId)))
            },500)
        })
        getProduct.then(res=>setProduct(res))
    }, [itemId])
    if (!product) return <h2>Cargando...</h2>

    return (
        <div className='detail'>

            <h2>{product.name}</h2>
            <img src={product.img} alt={product.name} className="detail__image" />
            <p>{product.description}</p>
            <p>Tipo: {product.popularity}%</p>

            <ItemCount />

        </div>
    )

}

export default ItemDetail
