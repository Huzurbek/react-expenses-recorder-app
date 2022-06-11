import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // How to use useState() in Individual way:
    // const [enteredTitle, setEnteredTitle] = useState('birin');
    // const [enteredAmount, setEnteredAmount] = useState(0);
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    const titleChangeHandler = (event) =>{
        // setEnteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        setUserInput((prevState)=>{
            return {...prevState, enteredTitle: event.target.value}
        })
    }
    const amountChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return {...prevState, enteredAmount: event.target.value}
        })
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState)=>{
            return {...prevState, enteredDate: event.target.value}
        })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
        props.onSaveExpenseData(expenseData)    
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

    }
 
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} value={userInput.enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' onChange={amountChangeHandler} value={userInput.enteredAmount} min='0.01' step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' onChange={dateChangeHandler}  min='2019-01-01' max="2022-12-31" />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
