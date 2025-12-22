import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const { cartItems, removeFromCart } = useOutletContext();

    return (
        <div>
            <h2>Your Cart</h2>

            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                    cartItems.map((item) => (
                        <div key={item.id}>
                            <img src={item.image} alt={item.title} width="100px" />
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))
                )}
        </div>
    )
};

export default Cart;