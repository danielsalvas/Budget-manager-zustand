import { useState } from 'react';
import Message from './Message';
import { useStore } from '../store';
import closeBtn from '../img/close.svg';

const Modal = ({ keepExpense}) => {

    //State and constants

    const [message, setMessage] = useState('')
    const { animationModal, name, amount, category } = useStore(
        (state) => ({ 
          animationModal: state.animationModal,
          name: state.name,
          amount: state.amount,
          category: state.category,
        }));
    const { setModal, setAnimationModal, setName, setAmount, setCategory, setExpenses } = useStore();

    //Functions
    
    const closeModal = () => {
        
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

        keepExpense({ name, amount, category})
        setAmount(0)
        setName('')
        setCategory('')
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
            <legend>New Expense</legend>

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
                value="Add expense"
            />
        </form>
    </div>
  )
}

export default Modal
