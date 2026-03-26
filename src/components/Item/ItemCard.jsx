import { Card, Button } from "antd"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

const { Meta } = Card

function ItemCard({ product }) {
    const { addToCart } = useContext(CartContext)
    return (
        <Card
        hoverable
        style={{ width: 260 }}
        cover={
            <img
            alt={product.name}
            src={product.img}
            />
        }
        >
        <Meta
            title={product.name}
            description={`Tipo: ${product.type}`}
        />

        <p>Popularidad: {product.popularity}%</p>

        <p>Precio: ${product.price}</p>

        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <Button onClick={() => addToCart(product)}>
                Agregar
            </Button>

            <NavLink to={`/item/${product.id}`}>
                <Button type="primary">
                Ver detalle
                </Button>
            </NavLink>
        </div>

        </Card>
    )
    }

export default ItemCard