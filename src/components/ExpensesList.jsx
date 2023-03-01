import { useStore } from "../store"
import Expense from "./Expense";

const ExpensesList = () => {

    const { expenses, filter, filteredExpenses } = useStore(
        (state) => ({ 
          expenses: state.expenses,
          filter: state.filter,
          filteredExpenses: state.filteredExpenses 
    }));

  return (
    <div className="expenses-list container">

      {filter ? (
        <>
          <h2>{filteredExpenses.length ? 'Expenses' : 'There is no expenses yet'}</h2>
          {
            filteredExpenses.map( expense => (
              <Expense key={expense.id} expense={expense} />
            ))
          }
        </>
      ) : (
        <>
          <h2>{expenses.length ? 'Expenses' : 'There is no expenses yet'}</h2>
          {expenses.map( expense => (
            <Expense key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  )
}

export default ExpensesList
