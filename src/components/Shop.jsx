import { useState, useEffect } from "react";
import Items from "./Items";

function Shop() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch("https://fakestoreapi.com/products", {signal})
        .then((res) => res.json())
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
            if (err.name === 'AbortError') {
                return;
            } else {
                console.error('Fetch error:', err);
                setLoading(false);
            }
        });

        return () => controller.abort();
    }, []);

    if (loading) return <p className="loading">Loading ...</p>

    return (
        <div className="shop">
            {cards.map((card) => (
                <div key={card.id} className="product">
                    <img src={card.img} alt={card.title} className="picture"/>
                    <p><strong>{card.title}</strong></p>
                    <p className="description">{card.description}</p>
                    <p><strong>${card.price}</strong></p>
                    <Items />
                </div>
            ))}
        </div>
    )
}

export default Shop;