import { useState } from "react";
import { useStore } from "../store";
import Message from "./Message"

const NewBudget = () => {

    const [message, setMessage] = useState('')

    const { budget } = useStore(
        (state) => ({
        budget: state.budget
        })
    );

    const { setBudget } = useStore();

    const handleBudget = (e) => {
        e.preventDefault()

        if (!Number(budget) || Number(budget) < 0) {
            setMessage('Please set a valid budget')
        }
    }

  return (
    <div className="container-budget container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
            <label> What is your budget? </label>
            <input 
                className="new-budget"
                type="text" 
                placeholder="Budget"
                value={budget}
                onChange= { (e) => setBudget(e.target.value)}
            />

            <input type="submit" value='Add' />

            { message && <Message type="error">{message}</Message>}
        </div>
      </form>
    </div>
  )
}

export default NewBudget
