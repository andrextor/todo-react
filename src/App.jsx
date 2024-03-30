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
import { useTodos } from './useTodos';
import { ChangeAlertWithStorageListener } from "./components/ChangeALert"

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
    addTodo,
    sincronizeItem,
    searchedTodos
  } = useTodos();

  return (
    <div className="App">
      <TodoHeader loading={loading}>
        <TodoCompleted todos={todos} onLoading={() => <p> Loading...</p>} />
        <Search search={search} setSearch={setSearch} />
      </TodoHeader>

      <List
        error={error}
        loading={loading}
        search={search}
        todos={todos}
        searchedTodos={searchedTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmpty={() => <TodosEmpty />}
        onEmptySearchResults={(searchText) => <p>No se encontraron resultados para {searchText}</p>}
        render={todo => (
          <Item
            key={todo?.text}
            text={todo?.text}
            completed={todo?.completed}
            onComplete={() => completeTodo(todo?.text)}
            onDelete={() => deleteTodo(todo?.text)}
          />
        )
        }
      />
      <CreateTodo setOpenModal={setOpenModal} />

      {
        openModal && (
          <Modal>
            <TodoForm setOpenModal={setOpenModal} addTodo={addTodo} />
          </Modal>
        )
      }

      <ChangeAlertWithStorageListener
        sincronize={sincronizeItem}
      >

      </ChangeAlertWithStorageListener>
    </div>
  );
}

export default App;
