import React, { useRef } from 'react'
import Input from '../../UI/Input'

import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
    const amountInputRef = useRef();

    const onSubmitHandler = e => {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const enteredAmountNumber = +enteredAmount
        if (enteredAmount > 5 || enteredAmount < 1) {
            return;
        }
        props.onAddToCart(enteredAmountNumber)
    }
    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input ref={amountInputRef} label="Amount" input={{
                id: 'amount_' + props.id,
                type: 'number',
                max: '5',
                min: '1',
                step: '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;