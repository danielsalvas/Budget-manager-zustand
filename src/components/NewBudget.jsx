import { useState } from "react";
import { useStore } from "../store";
import Message from "./Message"

const NewBudget = () => {

    //States, Constants and Variables

    const [message, setMessage] = useState('')

    const { budget } = useStore(
        (state) => ({ budget: state.budget })
    );

    const { setBudget, setIsValidBudget } = useStore();

    //Functions

    const handleBudget = (e) => {
        e.preventDefault()

        if (!budget || budget < 0) {
            setMessage('Please set a valid budget')
            return
        }

        setMessage('')

        setIsValidBudget(true)
    }

  return (
    <div className="container-budget container shadow">
      <form onSubmit={handleBudget} className="form">
        <div className="field">
            <label> What is your budget? </label>
            <input 
                className="new-budget"
                type="number" 
                placeholder="Budget"
                value={budget}
                onChange= { (e) => setBudget(Number(e.target.value))}
            />

            <input type="submit" value='Add' />

            { message && <Message type="error">{message}</Message>}
        </div>
      </form>
    </div>
  )
}

export default NewBudget
