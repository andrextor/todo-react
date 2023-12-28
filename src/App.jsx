import './App.css';
import { AppUI } from './components/AppUI';
import { TodoProvider } from './TodoContext';

const App = () => 
  <TodoProvider> 
    <AppUI  />
  </TodoProvider>

export default App;
