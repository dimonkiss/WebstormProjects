// ProductList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};

interface ProductListProps {
    addToCart: (productId: number, quantity: number) => void;
    removeFromCart: (productId: number, quantity: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart, removeFromCart }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<number[]>([]);
    const [addedToCart, setAddedToCart] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        axios.get('http://localhost:3001/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching product list:', error);
            });
    }, []);

    const getTotalQuantity = (productId: number) => {
        return (addedToCart[productId] || 0) + (cartItems.filter(item => item === productId).length || 0);
    };

    const handleAddToCart = (productId: number) => {
        if (!addedToCart[productId]) {
            addToCart(productId, 1);
            setAddedToCart((prevAddedToCart) => ({
                ...prevAddedToCart,
                [productId]: (prevAddedToCart[productId] || 0) + 1,
            }));
        } else {
            alert('Цей товар вже доданий до корзини.');
        }
    };

    const handleRemoveFromCart = (productId: number) => {
        removeFromCart(productId, 1);
        setAddedToCart((prevAddedToCart) => {
            const updatedAddedToCart = { ...prevAddedToCart };
            if (updatedAddedToCart[productId]) {
                updatedAddedToCart[productId] -= 1;
                if (updatedAddedToCart[productId] === 0) {
                    delete updatedAddedToCart[productId];
                }
            }
            return updatedAddedToCart;
        });
    };

    return (
        <div>
            <h1>Product List</h1>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product: Product) => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        <td>
                            <button onClick={() => handleAddToCart(product.id)}>
                                Add to Cart ({getTotalQuantity(product.id)})
                            </button>
                            <button onClick={() => handleRemoveFromCart(product.id)}>Remove from Cart</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
