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
      </form>
    </div>
  )
}

export default Modal
