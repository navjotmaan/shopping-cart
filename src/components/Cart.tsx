import { useOutletContext } from "react-router-dom";
import type { CartContext } from "./Interface.js";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity } = useOutletContext<CartContext>();

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity);
    }, 0);

    return (
        <div className="text-center mt-40">
            <div className="flex justify-evenly items-center text-lg">
                <h2 className="text-2xl text-[#132a13] font-bold">Your Cart</h2>
                <strong><p>Total Price: ${totalPrice.toFixed(2)}</p></strong>
            </div>

            {cartItems.length === 0 ? (
                <p className="mt-20 text-gray-400 text-lg">your cart is empty</p>
            ) : (
                <div className="flex flex-wrap justify-center gap-6 md:mx-20 mx-10 my-10">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex md:flex-row flex-col justify-evenly items-center p-8 flex-[1_1_calc(50%-20px)] rounded-xl border max-w-[800px]">
                            <img src={item.image} alt={item.title} width="120px" />
                            <div>
                            <strong><p className="py-3">{item.title}</p></strong>
                            <strong><p className="md:py-5 py-3">${item.price}</p></strong>
                           
                            <div className="flex justify-center items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, -1)} className="bg-[#5898c0] text-white font-bold rounded-[50%] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 flex px-3 py-1">-</button>
                                    <span>Quantity: {item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)} className="bg-[#5898c0] text-white font-bold rounded-[50%] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 flex px-3 py-1">+</button>
                                </div>

                                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white font-semibold rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 flex px-3 py-1">Remove</button>
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