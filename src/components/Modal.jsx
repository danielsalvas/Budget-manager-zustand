import { useState, useEffect } from 'react';
import Message from './Message';
import { useStore } from '../store';
import closeBtn from '../img/close.svg';

const Modal = ({ keepExpense}) => {

    //State and constants

    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')
    const [id, setId] = useState('')
    const { animationModal, name, amount, category, editExpense } = useStore(
        (state) => ({ 
          animationModal: state.animationModal,
          name: state.name,
          amount: state.amount,
          category: state.category,
          editExpense: state.editExpense,
        }));
    const { setModal, setAnimationModal, setName, setAmount, setCategory, setEditExpense } = useStore();

    //Functions

    useEffect(() => {
        setAmount(0)
        setName('')
        setCategory('')
        if (Object.keys(editExpense).length > 0) {
          setName(editExpense.name)
          setAmount(editExpense.amount)
          setCategory(editExpense.category)
          setId(editExpense.id)
          setDate(editExpense.date)
        }
      }, [ ])
    
    const closeModal = () => {
        setEditExpense({})
        setAnimationModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([ name, amount, category].includes('') || amount <= 0) {
            setMessage('Please, set valid fields')

            setTimeout(() => {
                setMessage('')
            }, 3000);
            return
        } else

        keepExpense({ name, amount, category, id, date})
    }

  return (
    <div className="modal">
        <div className="close-modal">
            <img 
                src={closeBtn}
                alt="close modal" 
                onClick={closeModal}
            />
        </div>

        <form 
            className={`form ${ animationModal ? 'animation' : 'close'}`}
            onSubmit={handleSubmit}
        >
            <legend>{editExpense.name ? 'Edit Expense' : 'New Expense' }</legend>

            {message && <Message type='error'>{message}</Message> }

            <div className='field'>
                <label htmlFor="name">Expense Name</label>
                <input 
                    id="name"
                    type="text" 
                    placeholder="Add the expense name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className='field'>
                <label htmlFor="amount">Amount</label>
                <input 
                    id="amount"
                    type="number" 
                    placeholder="Add expense amount. Ex: 200"
                    value={amount}
                    onChange={e => setAmount(Number(e.target.value))}
                />
            </div>

            <div className='field'>
                <label htmlFor="category">Category</label>

                <select 
                    id="category"
                    value={category}
                    onChange={e => setCategory(e.target.value)}
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

            <input 
                type="submit" 
                value={editExpense.name ? 'Save Changes' : 'Add Expense' }
            />
        </form>
    </div>
  )
}

export default Modal
