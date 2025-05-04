import Header from './components/Header';
import TodoAdd from './components/TodoAdd';
import TodoControls from './components/TodoControls';
import TodoList from './components/TodoList';
export function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className="px-32">
        <div className="flex justify-between items-center">
          <h1 className="font-bold">Todo List</h1>
          <TodoControls />
        </div>
        <TodoList />
        <TodoAdd />
      </div>
    </div>
  );
}

export default App;
