import { useState } from "react";

const Items = () => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    return (
        <div>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <label htmlFor="items">
                <input
                    name="items" 
                    value={quantity}
                    onChange={handleChange}
                />
            </label>
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
    )
};

export default Items;