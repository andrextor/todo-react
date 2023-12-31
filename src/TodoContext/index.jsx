import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/LocalStorage";

const LOCAL_STORAGE_NAME = 'TODOS_V1';

const TodoContext = createContext()

function TodoProvider({ children }) {

    const [search, setSearch] = useState('');
    const [todos, saveTodos, loading, error] = useLocalStorage(LOCAL_STORAGE_NAME, [])

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({ text, completed: false });
        saveTodos(newTodos)
    }

    const completeTodo = (text) => {

        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text)

        newTodos[todoIndex].completed = newTodos[todoIndex].completed ? false : true;
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(todo => todo.text === text)
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const [openModal, setOpenModal] = useState(false);

    return (
        <TodoContext.Provider value={{
            todos,
            search,
            setSearch,
            loading,
            error,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }