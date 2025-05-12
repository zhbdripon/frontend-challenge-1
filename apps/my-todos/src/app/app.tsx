import Header from './components/Header';
import TodoAdd from './components/TodoAdd';
import { TodoListContainer } from './components/TodoList';

export function App() {
  return (
    <div className="h-screen font-sans text-gray-600 text-sm px-2 md:px-8">
      <Header />
      <div className=" flex flex-row ">
        <TodoListContainer />
        <TodoAdd />
      </div>
    </div>
  );
}

export default App;
