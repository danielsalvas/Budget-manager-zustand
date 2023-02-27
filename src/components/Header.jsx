import NewBudget from "./NewBudget"
import { useStore } from "../store"

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
        <p>Budget Control</p>
      ) : (
        <NewBudget />
      )}
    </header>
  )
}

export default Header
