import './App.css';

import { TodosEmpty } from './components/TodosEmpty'
import { TodosError } from "./components/TodosError"
import { TodosLoading } from "./components/TodosLoading"
import { TodoCompleted } from './components/TodoCompleted';
import { Search } from './components/Search';
import { List } from './components/List';
import { Item } from './components/Item';
import { CreateTodo } from './components/CreateTodo';
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { TodoHeader } from "./components/TodoHeader";
import { useTodos } from './userTodos';

function App() {
  const {
    loading,
    error,
    search,
    completeTodo,
    deleteTodo,
    todos,
    openModal,
    setOpenModal,
    setSearch,
    addTodo
  } = useTodos();

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
          ?.filter(todo => todo.text.toLowerCase().includes(search))
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
            <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
          </Modal>
        )
      }
    </div>
  );
}

export default App;
