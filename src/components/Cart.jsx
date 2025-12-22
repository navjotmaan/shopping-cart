import { useOutletContext } from "react-router-dom";

const Cart = () => {
    const { cartItems, removeFromCart } = useOutletContext();

    return (
        <div className="cart-page">
            <h2 className="your-cart">Your Cart</h2>

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
                           
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)} className="remove">Remove</button>
                            
                            </div>
                        </div>
                    ))}
                </div>
                )}
        </div>
    )
};

export default Cart;