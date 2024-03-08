import '../styles/todoCompleted.css'

const TodoCompleted = ({ todos, loading, onLoading }) => {

    const completedTodos = () => todos?.filter(todo => todo.completed)?.length
    const isComplete = todos?.length === completedTodos();
    return (
        <>
            {loading && onLoading()}
            {!loading && ! isComplete && (< h1 className={`counter ${loading && "counter--loading"}`}>
                Completed <span>{completedTodos()}</span>  of <span>{todos?.length}</span> TODOS
            </h1>)
            }
            {!loading && isComplete && <h1>Conseguido , todas tus tareas listas 🎉</h1>}
        </>
    )
}

export { TodoCompleted }