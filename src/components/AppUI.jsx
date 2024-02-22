import { TodosEmpty } from "./TodosEmpty"
import { TodosError } from "./TodosError"
import { TodosLoading } from "./TodosLoading"
import { TodoCompleted } from './TodoCompleted';
import { Search } from './Search';
import { List } from './List';
import { Item } from './Item';
import { CreateTodo } from './CreateTodo';
import { TodoContext } from "../userTodos";
import { Modal } from "./Modal";
import { useContext } from "react";
import { TodoForm } from "./TodoForm";
import { TodoHeader } from "./TodoHeader";

const AppUI = () => {

    const {
        loading,
        error,
        search,
        completeTodo,
        deleteTodo,
        todos,
        openModal,
        setOpenModal,
        setSearch
    } = useContext(TodoContext)

    return (
        <div className="App">
            <TodoHeader>
                <TodoCompleted todos={todos} />
                <Search search={search} setSearch={setSearch} />
            </TodoHeader>
            <List>
                {loading && <TodosLoading />}
                {!loading && error && <TodosError />}
                {(!loading && todos.length <= 0) && <TodosEmpty />}

                {todos
                    .filter(todo => todo.text.toLowerCase().includes(search))
                    .map(todo =>
                        <Item
                            key={todo.text}
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    )}
            </List>

            <CreateTodo setOpenModal={setOpenModal} />

            {
                openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )
            }
        </div>
    );
}


export { AppUI }