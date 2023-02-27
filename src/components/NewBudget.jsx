
const NewBudget = () => {
  return (
    <div className="container-budget container shadow">
      <form className="form">
        <div className="field">
            <label> What is your budget? </label>
            <input 
                className="new-budget"
                type="text" 
                placeholder="Budget"
            />

            <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default NewBudget
