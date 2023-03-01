import { useState, useEffect } from "react"
import { useStore } from "../store";

const Filters = () => {

    const { filter } = useStore(
        (state) => ({ 
          filter: state.filter
        }));
    
    const { setFilter } = useStore();
    
  return (
    <div className="filters shadow container">
        <form>
            <div className="field">
                <label>Expenses Filter</label>
                <select
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                >
                    <option value="">-- Select Category --</option>
                    <option value="saving"> Saving </option>
                    <option value="food"> Food </option>
                    <option value="home"> Home </option>
                    <option value="fun"> Fun </option>
                    <option value="various"> Various </option>
                    <option value="health"> Health </option>
                    <option value="suscriptions"> Suscriptions </option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filters
