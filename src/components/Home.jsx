import { Link } from "react-router-dom";
import '../App.css'

const Home = () => {
    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='shop'>Shop</Link></li>
                <li><Link to='cart'>Cart</Link></li>
            </ul>
        </nav>
    )
};

export default Home;