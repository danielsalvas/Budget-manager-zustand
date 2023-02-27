import React from 'react'
import { useStore } from '../store';

const BudgetControl = () => {

    const { budget } = useStore(
        (state) => ({ budget: state.budget })
    );

    const amountFormat = (amount) => {
        return amount.toLocaleString( 'en-US' , {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className='container-budget container shadow two-columns'>
      <div>
        <p>Here goes the graphic</p>
      </div>

      <div className='budget-content'>
        <p>
            <span>Budget:</span> {amountFormat(budget)}
        </p>
        <p>
            <span>Available:</span> {amountFormat(budget)}
        </p>
        <p>
            <span>Spent:</span> {amountFormat(budget)}
        </p>
      </div>
    </div>
  )
}

export default BudgetControl
