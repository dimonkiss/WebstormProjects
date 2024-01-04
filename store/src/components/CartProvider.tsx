// CartProvider.js

import React, { createContext, useReducer, useContext } from 'react';
import CartContext from './CarContext';
import { cartReducer, initialState } from './reducer';


// @ts-ignore
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (productId: any, quantity: any) => {
        dispatch({ type: 'ADD_TO_CART', payload: { productId, quantity } });
    };

    const removeFromCart = (productId: any, quantity: any) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: { productId, quantity } });
    };

    return (
        <CartContext.Provider value={{ state, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };
