import { useState, useEffect } from 'react';
import { useStore } from '../store';
import { amountFormat } from '../helpers';

const BudgetControl = () => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)

    const { budget, expenses } = useStore(
        (state) => ({ 
          budget: state.budget,
          expenses: state.expenses
        })
    );

    useEffect(() => {
      const spentTotal = expenses.reduce( (total, expense) => expense.amount + total, 0)
      setSpent(spentTotal)

      const newAvailable = budget - spentTotal
      setAvailable(newAvailable)
    }, [expenses])
    
  return (
    <div className='container-budget container shadow two-columns'>
      <div>
        <p>Here goes the graphic</p>
      </div>

      <div className='budget-content'>
        <p> <span>Budget:</span> {amountFormat(budget)} </p>
        <p> <span>Available:</span> {amountFormat(available)} </p>
        <p> <span>Spent:</span> {amountFormat(spent)} </p>
      </div>
    </div>
  )
}

export default BudgetControl
