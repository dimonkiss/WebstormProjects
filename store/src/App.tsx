// App.js
import React1, { useState, useEffect } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function App() {
    const [cart, setCart] = useState<{ [key: number]: number }>({});

    const addToCart = (productId: number, quantity: number) => {
        setCart((prevCart) => ({
            ...prevCart,
            [productId]: (prevCart[productId] || 0) + quantity,
        }));
    };
    const removeFromCart = (productId: number, quantity: number) => {
        setCart((prevCart) => {
            const updatedCart = { ...prevCart };
            if (updatedCart[productId]) {
                updatedCart[productId] -= quantity;
                if (updatedCart[productId] <= 0) {
                    delete updatedCart[productId];
                }
            }
            return updatedCart;
        });
    };
    return (
        <Router>
            <div>
                <Menu mode="horizontal" theme="dark">
                    <Menu.Item key="home">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="cart">
                        <Link to="">Cart ({Object.values(cart).reduce((total, quantity) => total + quantity, 0)})</Link>
                    </Menu.Item>

                </Menu>
                <Routes>
                    <Route
                        path="/"
                        element={<ProductList addToCart={addToCart} removeFromCart={removeFromCart} />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
