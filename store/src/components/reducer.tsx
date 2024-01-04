// reducer.js

export const initialState = {
    cart: {},
};

export const cartReducer = (state: { cart: { [x: string]: any; }; }, action: { type: any; payload: { productId: any; quantity: number; }; }) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const productId = action.payload.productId;
            return {
                ...state,
                cart: {
                    ...state.cart,
                    [productId]: (state.cart[productId] || 0) + action.payload.quantity,
                },
            };

        case 'REMOVE_FROM_CART':
            const updatedCart = { ...state.cart };
            const removedProductId = action.payload.productId;
            if (updatedCart[removedProductId]) {
                updatedCart[removedProductId] -= action.payload.quantity;
                if (updatedCart[removedProductId] <= 0) {
                    delete updatedCart[removedProductId];
                }
            }
            return {
                ...state,
                cart: updatedCart,
            };

        default:
            return state;
    }
};
