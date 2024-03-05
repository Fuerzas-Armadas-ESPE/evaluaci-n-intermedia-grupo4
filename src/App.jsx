import './App.css'
import { TodoWrapper } from './components/TodoWrapper'
import { TodoTask } from './components/TodoTask'

function App() {
  return (
    <div className="App">
      <TodoTask />
      <TodoWrapper />
    </div>
  );
}

export default App
