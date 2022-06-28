import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/Cart-Context'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
    const ctx = useContext(CartContext)
    const numOfCartContext = ctx.items.reduce((cNum, item) => cNum + item.amount,0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfCartContext}</span>
        </button>
    );
}

export default HeaderCartButton;