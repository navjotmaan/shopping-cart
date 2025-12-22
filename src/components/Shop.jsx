import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Items from "./Items";

function Shop() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { addToCart } = useOutletContext();

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch("https://fakestoreapi.com/products", {signal})
        .then((res) => {
            if (!res.ok) throw new Error("Failed to fetch products");
            return res.json();
        })
        .then((data) => {
            const products = data.map((product) => ({
                id: product.id,
                img: product.image,
                title: product.title,
                description: product.description,
                price: product.price,
            }));
            setCards(products);
            setLoading(false);
        })
        .catch((err) => {
            if (err.name === 'AbortError') return;
            setError(err.message);
            setLoading(false);
        });

        return () => controller.abort();
    }, []);

    if (loading) return <p className="loading">Loading ...</p>
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className="shop">
            {cards.map((card) => (
                <Items 
                    key={card.id}
                    id={card.id}
                    image={card.img} 
                    title={card.title} 
                    description={card.description}
                    price={card.price} 
                    addToCart={addToCart}
                />
            ))}
        </div>
    )
}

export default Shop;