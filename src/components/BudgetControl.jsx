import { useState, useEffect } from 'react';
import { useStore } from '../store';
import { amountFormat } from '../helpers';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = () => {

    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    const [percentage, setPercentage] = useState(0)
    const { budget, expenses } = useStore(
        (state) => ({ 
          budget: state.budget,
          expenses: state.expenses
        })
    );

    const { handleResetApp } = useStore();

    useEffect(() => {
      const spentTotal = expenses.reduce( (total, expense) => expense.amount + total, 0)
      const newAvailable = budget - spentTotal;

      //Percentage Calculation

      const newPercentage = (( (budget - newAvailable) / budget ) * 100).toFixed(2);
  
      setAvailable(newAvailable)
      setSpent(spentTotal)

      setTimeout(() => {
        setPercentage(newPercentage)
      }, 1000);
    }, [expenses])
    
  return (
    <div className='container-budget container shadow two-columns'>
      <div>
        <CircularProgressbar
          value={percentage}
          strokeWidth= {5}
          text={`${percentage}% Gastado`}
          background
          backgroundPadding={3}
          styles={buildStyles({
          backgroundColor: "#3c4c8f",
          textColor: "#fff",
          pathColor: percentage > 80 ? 'red' : '#fff',
          trailColor: "transparent"  
          })}
        />
      </div>

      <div className='budget-content'>
        <button className='reset-app' type='button' onClick={handleResetApp} >Reset App</button>
        <p> <span>Budget:</span> {amountFormat(budget)} </p>
        <p className={`${available < 0 ? 'negative' : ''}`}> <span>Available:</span> {amountFormat(available)} </p>
        <p> <span>Spent:</span> {amountFormat(spent)} </p>
      </div>
    </div>
  )
}

export default BudgetControl
