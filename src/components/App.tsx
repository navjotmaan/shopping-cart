import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import '../App.css'

export interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    description?: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartContext {
    cartItems: CartItem[];
    addToCart: (newItem: CartItem) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, amount: number) => void;
}

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
            <nav className="navigation-bar">
                <h1>EPIKCART</h1>
                <div className="links-bar">
                    <Link to='/'>Home</Link>
                    <Link to='shop'>Shop</Link>
                    <Link to='cart'>Cart <sup>{cartItems.length}</sup></Link>
                </div>
            </nav>

            <Outlet context={contextValue} />
        </div>
    )
};

export default App;