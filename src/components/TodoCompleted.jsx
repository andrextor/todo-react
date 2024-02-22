import '../styles/todoCompleted.css'

const TodoCompleted = ({ todos }) => {

    const completedTodos = () => todos?.filter(todo => todo.completed)?.length
    const isComplete = todos?.length === completedTodos();
    return (
        <>
            {!isComplete
                ?
                < h1 className='counter'>
                    Completed <span>{completedTodos()}</span>  of <span>{todos?.length}</span> TODOS
                </h1 >
                : <h1>Conseguido , todas tus tareas listas 🎉</h1>
            }

        </>
    )
}

export { TodoCompleted }