import React from "react"
import HeaderCartButton from "./HeaderCartButton"

import classes from './Header.module.css'
import Meals from '../../assets/meals.jpg'

const Header = props => {

    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={Meals} alt="meals.jpg" />
            </div>
        </React.Fragment>
    );
}

export default Header;