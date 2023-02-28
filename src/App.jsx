import { useState } from 'react'
import ExpensesList from './components/ExpensesList'
import Header from './components/Header'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewExpenseIcon from './img/new-expense-icon.svg'
import { useStore } from './store'

function App() {

  const { isValidBudget, modal, expenses } = useStore(
    (state) => ({ 
      isValidBudget: state.isValidBudget, 
      modal: state.modal,
      expenses: state.expenses,
    }));

  const { setModal, setAnimationModal, setExpenses } = useStore();

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimationModal(true)
    }, 300);
  }

  const keepExpense = (expense) => {
    expense.id = generateId()
    expense.date = Date.now()
    setExpenses([...expenses, expense])

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
