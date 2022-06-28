import React from 'react'
import Modal from '../UI/Modal'

import classes from './Cart.module.css'

const Cart = props => {
    const cartItems = <ul>{[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(item => <li key={item.id}>{item.name}</li>)}</ul>

    return (
        <Modal onClose={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;