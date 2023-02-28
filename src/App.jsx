import { useState, useEffect } from 'react'
import ExpensesList from './components/ExpensesList'
import Header from './components/Header'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewExpenseIcon from './img/new-expense-icon.svg'
import { useStore } from './store'

function App() {

  const { isValidBudget, modal, expenses, editExpense } = useStore(
    (state) => ({ 
      isValidBudget: state.isValidBudget, 
      modal: state.modal,
      expenses: state.expenses,
      editExpense: state.editExpense,
    }));

  const { setModal, setAnimationModal, setExpenses, setEditExpense } = useStore();

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true)
    
      setTimeout(() => {
        setAnimationModal(true)
      }, 300);
    }
  }, [ editExpense ])
  

  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})

    setTimeout(() => {
      setAnimationModal(true)
    }, 300);
  }

  const keepExpense = (expense) => {

    if (expense.id) {
      // If there exist an ID, it means we're editing and updating the data
      const updatedExpenses = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState)

      setExpenses(updatedExpenses)

    } else {
      //If there is no an id, it means we're adding a new entry
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([...expenses, expense])
    }

    setAnimationModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
  }

  return (
    <div className={modal ? 'fixed' : ''}>
        <Header />

      { isValidBudget && (
        <>
          <main>
            <ExpensesList />
          </main>

          <div className='new-expense'>
            <p className='new'>Add Expense</p>
            <img 
              src={NewExpenseIcon} 
              alt="New Expense Icon" 
              onClick={handleNewExpense}
            />
          </div>
        </>
      )}

      {modal && <Modal keepExpense={keepExpense} /> }
    </div>
  )
}

export default App
