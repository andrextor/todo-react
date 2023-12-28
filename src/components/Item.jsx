import { CompleteIcon } from './CompleteIcon.jsx'
import { DeleteIcon } from './DeleteIcon.jsx'
import '../styles/item.css'

const Item = ({ text, completed, onComplete, onDelete }) => {
    return (
        <li className="Item">
            <CompleteIcon onComplete={onComplete} completed={completed} />
            <p className={`Item-p ${completed && "Item-p--complete Icon-check--active"}`}> {text} </p>
            <DeleteIcon onDelete={onDelete} />
        </li>
    );
}

export { Item }