import { TodoIcon } from '../helpers/TodoIcons.js'

const CompleteIcon = ({ onComplete, completed }) => (
    <TodoIcon
        type='check'
        color={completed ? 'green' : 'none'}
        action={onComplete}
    />
);

export { CompleteIcon }