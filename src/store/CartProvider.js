import CartContext from "./Cart-Context";
import { useReducer } from 'react';

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    if (action.type === 'REMOVE') {
        return
    }
    return defaultCartState
}

const CartProvider = props => {
    const [cartState, cartDispatch] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHander = item => {
        cartDispatch({ type: 'ADD', item: item })
    }

    const removeItemFromCartHandler = id => {
        cartDispatch({ type: 'REMOVE', id: id })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHander,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
}

export default CartProvider;