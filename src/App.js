import './App.css';
import { Counter } from './component/Counter';
import { Todos } from './component/Todo';

function App() {
  return (
    <div className="App">
      <div>welcome</div>
      <Counter/>
      <Todos/>
    </div>
  );
}

export default App;
