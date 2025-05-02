import Header from './components/Header';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

export function App() {

  return (
    <div className="h-screen">
      <Header />
      <div className="px-32">
        <h1 className="font-bold">Todo List</h1>
        <TodoList />
        <TodoAdd />
      </div>
    </div>
  );
}

export default App;
