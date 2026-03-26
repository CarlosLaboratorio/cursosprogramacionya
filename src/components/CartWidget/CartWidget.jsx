import { Badge } from "antd"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

function CartWidget() {

    const { getTotalItems } = useContext(CartContext)

    return (
        <Link to="/cart">
            <Badge count={getTotalItems()} showZero>
                <span style={{ fontSize: 24 }}>🛒</span>
            </Badge>
        </Link>
    )
}

export default CartWidget