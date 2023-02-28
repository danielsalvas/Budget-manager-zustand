import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
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
    setExpenses([...expenses, expense])
  }

  return (
    <div>
      <div className="App">
      <Header />
      </div>

      { isValidBudget && (
        <div className='new-expense'>
          <p className='new'>Add Expense</p>
          <img 
            src={NewExpenseIcon} 
            alt="New Expense Icon" 
            onClick={handleNewExpense}
          />
        </div>
      )}

      {modal && <Modal keepExpense={keepExpense} /> }
    </div>
  )
}

export default App
