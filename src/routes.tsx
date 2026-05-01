import App from './components/App.js';
import Home from './components/Home.js';
import Cart from './components/Cart.js';
import Error from './components/Error.js';
import Shop from './components/Shop.js';

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'shop',
                element: <Shop />,
            },
            {
                path: 'cart',
                element: <Cart />,
            },
        ],
    },
];

export default routes;