import { TodoIcon } from "../helpers/TodoIcons"

const DeleteIcon = ({ onDelete }) => (
    <TodoIcon
        type='delete'
        color='gray'
        action={onDelete}
    />
)

export { DeleteIcon }