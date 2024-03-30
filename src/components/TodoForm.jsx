import { useContext, useState } from 'react';
import '../styles/TodoForm.css'
import { useTodos } from '../useTodos';

const TodoForm = ({ setOpenModal, addTodo }) => {
    const [newTodoValue, setTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setTodoValue(event.target.value);
    }

    return (
        <form onSubmit={(event) => { onSubmit(event) }}>
            <label>Esribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    onClick={onCancel}
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"

                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm }