import { useState } from "react";
import { useLocalStorage } from "../hooks/LocalStorage";

const LOCAL_STORAGE_NAME = 'TODOS_V1';

function useTodos() {

    const [search, setSearch] = useState('');
    const [todos, saveTodos, loading, error, sincronizeItem] = useLocalStorage(LOCAL_STORAGE_NAME, [])

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

    const searchedTodos = () => todos?.filter(todo => todo.text.toLowerCase().includes(search))


    const [openModal, setOpenModal] = useState(false);

    return (
        {
            todos,
            search,
            setSearch,
            loading,
            error,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
            sincronizeItem,
            searchedTodos
        })
}

export { useTodos }