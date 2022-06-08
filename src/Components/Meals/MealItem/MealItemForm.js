import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import { useRef, useState } from 'react';
const MealItemForm = props =>{
    const [amountIsValid, setAmountIsValid] = useState(true);

    const refInput = useRef();
    const submitHandler = event =>{
    event.preventDefault();
    const enterAmount = refInput.current.value;
    console.log('enterAmount', enterAmount); 
    const enterAmountNumber = + enterAmount;
    if(enterAmountNumber.length === 0 || enterAmountNumber < 1 || enterAmountNumber > 5) {
        setAmountIsValid(false);
        return;
    } else setAmountIsValid(true);
    props.onAddToCart(enterAmountNumber);
}
return <form onSubmit={submitHandler} className={classes.form}>
    <Input ref={refInput} label="Amount" input={{id:props.id, type:"number", min:"1", max:"5", step: 1, defaultValue: 1}}/>
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid amount (1-5){amountIsValid}.</p>}
</form>
}

export default MealItemForm;