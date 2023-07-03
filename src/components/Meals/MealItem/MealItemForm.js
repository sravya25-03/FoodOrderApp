import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import React , {useRef , useState} from 'react';

const MealItemForm = props =>{

    const [amounIsValid , setAmountIsValid] = useState(true);
    const amountInputRef= useRef();
    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if(enteredAmount.trim().length ===0 || enteredAmountNumber<1 || enteredAmountNumber>5 ){
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return(
        <form className={classes.form} onSubmit={submitHandler}> 
            <Input label="Amount" ref={amountInputRef} input={{
                id:"amount_"+props.id,
                type:'number',
                min:"1",
                max:"5",
                step: "1",
                defaultValue:'1'
            }}/>
            <button>+ Add</button>
            {!amounIsValid && <p>Please Enter a Valid Amount</p>}
        </form>

    )
}

export default MealItemForm;