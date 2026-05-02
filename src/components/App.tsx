import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar.js";
import type { CartContext, CartItem } from "./Interface.js";

const App = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(newItem: CartItem) {
    
        setCartItems((prevItems) => {
            const isItemInCart = prevItems.find((item) => item.title === newItem.title);

            if (isItemInCart) {
                return prevItems.map((item) =>
                    item.title === newItem.title
                        ? { ...item, quantity: item.quantity + newItem.quantity }
                        : item
                );
            }

            return [...prevItems, newItem];
        });
    }

    function removeFromCart(productId: number) {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => item.id !== productId);
        });
    }

    function updateQuantity(productId: number, amount: number) {
        setCartItems((prevItems) => {
            return prevItems.map((item) => {
                if (item.id === productId) {
                    const newQuantity = Math.max(1, item.quantity + amount);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    }

    const contextValue: CartContext = {
        cartItems, addToCart, removeFromCart, updateQuantity
    }

    return (
        <div>
            <Navbar cartItems={cartItems} />

            <Outlet context={contextValue} />
        </div>
    )
};

export default App;