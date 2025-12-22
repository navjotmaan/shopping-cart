import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import '../App.css'

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(newItem) {
    
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

    function removeFromCart(productId) {
        setCartItems((prevItems) => {
            return prevItems.filter((item) => item.id !== productId);
        });
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

            <Outlet context={{ cartItems, addToCart, removeFromCart }} />
        </div>
    )
};

export default App;