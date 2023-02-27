import closeBtn from '../img/close.svg'
import { useStore } from '../store';

const Modal = () => {

    const { animationModal } = useStore(
        (state) => ({ 
          animationModal: state.animationModal
        }));
    const { setModal, setAnimationModal } = useStore();

    const closeModal = () => {
        
        setAnimationModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
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

      <form className={`form ${ animationModal ? 'animation' : 'close'}`}>
        <legend>New Expense</legend>

        <div className='field'>
            <label htmlFor="name">Expense Name</label>
            <input 
                id="name"
                type="text" 
                placeholder="Add the expense name"
            />
        </div>

        <div className='field'>
            <label htmlFor="amount">Expense Name</label>
            <input 
                id="amount"
                type="number" 
                placeholder="Add the expense name"
            />
        </div>
      </form>
    </div>
  )
}

export default Modal
