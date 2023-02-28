import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from "react-swipeable-list"
import 'react-swipeable-list/dist/styles.css'
import { dateFormat } from "../helpers"
import saveIcon from '../img/save-icon.svg'
import funIcon from '../img/fun-icon.svg'
import expenseIcon from '../img/expense-icon.svg'
import foodIcon from '../img/food-icon.svg'
import healthIcon from '../img/health-icon.svg'
import houseIcon from '../img/house-icon.svg'
import suscriptionsIcon from '../img/suscriptions-icon.svg'

const Expense = ({ expense }) => {

    const iconsDictionary = {
      saving : saveIcon,
      food : foodIcon ,
      home : houseIcon ,
      fun : funIcon ,
      various : expenseIcon ,
      health : healthIcon ,
      suscriptions : suscriptionsIcon ,
    }

    const { category, name, date, amount, id } = expense

    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={() => console.log('editanto') }>
          Edit
        </SwipeAction>
      </LeadingActions>
    )

    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction onClick={() => console.log('eliminando') }>
          Delete
        </SwipeAction>
      </TrailingActions>
    )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="expense shadow">
          <div className="expense-content">  

            <img src={iconsDictionary[category]} alt="Expense Icon" /> 
            <div className="expense-description">
                <p className="category"> {category} </p>
                <p className="expense-name"> {name} </p>
                <p className="expense-date">Added: {dateFormat(date)}</p>
            </div>
          </div>

          <p className="expense-amount"> ${amount} </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
