import { useState, useEffect } from 'react'
import ExpensesList from './components/ExpensesList'
import Filters from './components/Filters'
import Header from './components/Header'
import Modal from './components/Modal'
import { generateId } from './helpers'
import NewExpenseIcon from './img/new-expense-icon.svg'
import { useStore } from './store'

function App() {

  //States and constants

  const { isValidBudget, modal, expenses, editExpense, budget, filter } = useStore(
    (state) => ({ 
      budget: state.budget, 
      isValidBudget: state.isValidBudget, 
      modal: state.modal,
      expenses: state.expenses,
      editExpense: state.editExpense,
      filter: state.filter,
    }));

  const { setModal, setIsValidBudget, setAnimationModal, setExpenses, setEditExpense, setFilteredExpenses, handleNewExpense } = useStore();

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setModal(true)
    
      setTimeout(() => {
        setAnimationModal(true)
      }, 300);
    }
  }, [ editExpense ])

  useEffect(() => {
    localStorage.setItem('budget', budget ?? 0)
  }, [budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  }, [expenses])

  useEffect(() => {
    if (filter) {
      const filteredExpenses = expenses.filter( expense => expense.category === filter )
      setFilteredExpenses(filteredExpenses)
    }
  }, [filter])
  

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0;

    if (budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, [])
  
  //Functions

  const keepExpense = (expense) => {

    if (expense.id) {
      // If there exist an ID, it means we're editing and updating the data
      const updatedExpenses = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState)
      setExpenses(updatedExpenses)
      setEditExpense({})

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
            <Filters />
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
