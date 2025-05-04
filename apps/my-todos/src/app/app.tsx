import Header from './components/Header';
import TodoAdd from './components/TodoAdd';
import TodoControls from './components/TodoControls';
import TodoList from './components/TodoList';

export function App() {
  return (
    <div className="h-screen font-sans text-gray-600 text-sm">
      <Header />
      <div className="px-4 lg:px-32">
        <div className="flex md:flex-row flex-col justify-between items-center">
          <h1 className="font-bold text-lg">Todo List</h1>
          <TodoControls />
        </div>
        <TodoList />
        <TodoAdd />
      </div>
    </div>
  );
}

export default App;
