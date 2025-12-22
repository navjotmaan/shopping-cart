import { useState } from "react";

const Items = ({id, image, title, description, price, addToCart}) => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        const val = e.target.value;

        if (val === "") {
            setQuantity("");
            return;
        }

        const parseVal = parseInt(val);
        if (!isNaN(parseVal) && parseVal >= 0) {
            setQuantity(parseVal);
        }
    };

    return (
        <div className="card">
            <div className="product">
                <img src={image} alt={title} className="picture"/>
                <p><strong>{title}</strong></p>
                <p className="description">{description}</p>
                <p><strong>${price}</strong></p>
            </div>

            <div className="items">
                <div className="quantity">
                    <button type="button" onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
                    <label htmlFor="items">
                        <input
                            type="number"
                            name="items" 
                            value={quantity}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="button" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>

                <button className="add-cart" 
                onClick={() => {
                    if (quantity > 0) {
                        addToCart({id, image, title, price, quantity})
                }}}
                >Add to cart</button>
            </div>
        </div>
    )
};

export default Items;