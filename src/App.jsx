import './App.css'
import { TodoWrapper } from './components/TodoWrapper'
import { TodoTask } from './components/TodoTask'
import { TodoTemas } from './components/TodoTemas'

function App() {
  return (
    <div className="App">
      <TodoTemas />
      <TodoTask />
      <TodoWrapper />
    </div>
  );
}

export default App
