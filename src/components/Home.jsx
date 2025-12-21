import shopping from '../assets/shopping.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="shopping-girl">
            <div className='home-content'>
                <h2>Find Something You’ll Love</h2>
                <p>From unique finds to daily necessities, we’ve got everything you need to make your house a home.</p>
                <button><Link to="shop">Start Shopping</Link></button>
            </div>
            <img src={shopping} alt="" />
        </div>
    )
};

export default Home;