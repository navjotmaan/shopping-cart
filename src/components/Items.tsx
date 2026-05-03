import { useState } from "react";
import type { ItemProps } from "./Interface.js";

const Items = ({id, image, title, description, price, addToCart}: ItemProps) => {
    const [quantity, setQuantity] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;

        if (val === "") {
            setQuantity(0);
            return;
        }

        const parseVal = parseInt(val);
        if (!isNaN(parseVal) && parseVal >= 0) {
            setQuantity(parseVal);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center border p-3 rounded-lg max-w-[500px] shadow-md">
            <div className="text-center" data-testid="product-card">
                <img src={image} alt={title} className="w-[200px] m-auto"/>
                <p className="py-5"><strong>{title}</strong></p>
                <p className="line-clamp-2">{description}</p>
                <p className="md:py-5 py-2"><strong>${price}</strong></p>
            </div>

            <div className="flex md:flex-row flex-col gap-3 md:gap-7 justify-center items-center">
                <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setQuantity(Math.max(0, quantity - 1))} className="bg-[#5898c0] text-white font-bold rounded-[50%] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 flex px-3 py-1">-</button>
                    <label htmlFor="items">
                        <input
                            type="number"
                            name="items" 
                            value={quantity}
                            onChange={handleChange}
                            className="border rounded px-1"
                        />
                    </label>
                    <button type="button" onClick={() => setQuantity(quantity + 1)} className="bg-[#5898c0] text-white font-bold rounded-[50%] cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 flex px-3 py-1">+</button>
                </div>

                <button className="min-w-20 bg-[#fca311] text-white font-semibold rounded-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 flex px-3 py-1" 
                onClick={() => {
                    if (quantity > 0) {
                        addToCart({id, image, title, description: description || "", price, quantity})
                    }
                }}
                >Add to cart</button>
            </div>
        </div>
    )
};

export default Items;