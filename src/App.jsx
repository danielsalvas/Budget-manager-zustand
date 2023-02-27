import { useState } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import NewExpenseIcon from './img/new-expense-icon.svg'
import { useStore } from './store'

function App() {

  const { isValidBudget, modal } = useStore(
    (state) => ({ 
      isValidBudget: state.isValidBudget, 
      modal: state.modal 
    }));

  const { setModal, setAnimationModal } = useStore();

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimationModal(true)
    }, 300);
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

      {modal && <Modal /> }
    </div>
  )
}

export default App
