export interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    description?: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartContext {
    cartItems: CartItem[];
    addToCart: (newItem: CartItem) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, amount: number) => void;
}

export interface ItemProps extends Product {
    addToCart: (newItem: CartItem) => void;
}