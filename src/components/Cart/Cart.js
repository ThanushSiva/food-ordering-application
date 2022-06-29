import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../store/Cart-Context'

import classes from './Cart.module.css'

const Cart = props => {
    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const cartItems = <ul className={classes['cart-items']}>{cartCtx.items.map(item => <li key={item.id}>{item.name}</li>)}</ul>

    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;