import { useStore } from "../store"
import Expense from "./Expense";

const ExpensesList = () => {

    const { expenses } = useStore(
        (state) => ({ expenses: state.expenses }));

  return (
    <div className="expenses-list container">
      <h2>{expenses.length ? 'Expenses' : 'There is no expenses yet'}</h2>

      {expenses.map( expense => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </div>
  )
}

export default ExpensesList
