import CartContext from "./Cart-Context";

const CartProvider = props => {
    const addItemToCartHander = item => { }

    const removeItemFromCartHandler = id => { }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHander,
        removeItem: removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    );
}

export default CartProvider;