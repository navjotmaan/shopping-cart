import { useOutletContext } from "react-router-dom";
import type { CartContext } from "./App.js";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useOutletContext<CartContext>();

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    return (
        <div className="cart-page">
            <div className="heading">
                <h2 className="your-cart">Your Cart</h2>
                <strong><p>Total Price: ${totalPrice.toFixed(2)}</p></strong>
            </div>

            {cartItems.length === 0 ? (
                <p className="empty">your cart is empty</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-product">
                            <img src={item.image} alt={item.title} width="120px" />
                            <div>
                            <strong><p>{item.title}</p></strong>
                            <strong><p>${item.price}</p></strong>
                           
                            <div className="items">
                                <div className="quantity">
                                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                </div>

                                <button onClick={() => removeFromCart(item.id)} className="remove">Remove</button>
                            </div>
                            
                            </div>
                        </div>
                    ))}
                </div>
                )}
        </div>
    )
};

export default Cart;