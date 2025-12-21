import { Link, Outlet } from "react-router-dom";
import '../App.css'

const App = () => {
    return (
        <div>
            <nav className="navigation-bar">
                <h1>EPIKCART</h1>
                <div className="links-bar">
                    <Link to='/'>Home</Link>
                    <Link to='shop'>Shop</Link>
                    <Link to='cart'>Cart</Link>
                </div>
            </nav>

            <Outlet />
        </div>
    )
};

export default App;