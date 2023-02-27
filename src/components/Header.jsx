import NewBudget from "./NewBudget"
import { useStore } from "../store"
import BudgetControl from "./BudgetControl";

const Header = () => {

    const { isValidBudget } = useStore(
        (state) => ({ isValidBudget: state.isValidBudget })
    );

  return (
    <header>
      <h1>
        Budget Manager
      </h1>

      { isValidBudget ? (
        <BudgetControl />
      ) : (
        <NewBudget />
      )}
    </header>
  )
}

export default Header
