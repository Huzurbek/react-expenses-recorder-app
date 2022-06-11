import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2019')
    
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredYear
    })
    
    return (
        <div>
            <li>
                <Card className='expenses'>
                    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                    
                    <ExpensesChart expenses={filteredExpenses} />

                    <ExpensesList items={filteredExpenses}/>
                    {/* Second way of Conditional
                    {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                    {filteredExpenses.length > 0 &&
                        filteredExpenses.map((el)=> (
                            <ExpenseItem 
                                key={el.id}
                                title={el.title}
                                amount={el.amount}
                                date={el.date}
                            />
                        ))
                    } */}
                    
                </Card>
            </li>
        </div>
        
        
    )
}
export default Expenses;