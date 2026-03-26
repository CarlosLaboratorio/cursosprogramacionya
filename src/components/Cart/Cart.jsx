import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function Cart() {

    const { cart } = useContext(CartContext)

    const total = cart.reduce((acc, prod) => {
            const quantity = Number(prod.quantity) || 0
            const price = Number(prod.price) || 100
            return acc + (quantity * price)
    }, 0)

    return (
        <div>
        <h2>Carrito</h2>

        {cart.length === 0 ? (
            <p>El carrito está vacío</p>
        ) : (
            <>
            {cart.map((prod) => (
                <div key={prod.id}>
                <h3>{prod.name}</h3>
                <p>Cantidad: {prod.quantity}</p>
                <p>Precio: ${prod.price || 100}</p>
                <p>Subtotal: ${Number(prod.quantity) * Number(prod.price || 100)}</p>
                <hr />
                </div>
            ))}

            <h3>Total: ${total}</h3>
            </>
        )}

        </div>

    )
}

export default Cart