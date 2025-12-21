import App from './components/App';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Error from './components/Error';

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