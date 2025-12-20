import { Link, Outlet } from "react-router-dom";
import '../App.css'

const Home = () => {
    return (
        <div>
            <nav className="navigation-bar">
                <Link to='/' className="link">Home</Link>
                <Link to='shop' className="link">Shop</Link>
                <Link to='cart' className="link">Cart</Link>
            </nav>

            <Outlet />
        </div>
    )
};

export default Home;