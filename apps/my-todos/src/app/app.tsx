import { useState } from 'react';

export function App() {
  const [todos, setTodos] = useState(['eating', 'sleeping', 'coding']);

  const onTodoInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const newTodo = (e.target as HTMLInputElement).value;
      setTodos([...todos, newTodo]);
      (e.target as HTMLInputElement).value = '';
    }
  };

  return (
    <div className="">
      <h3>Todo List</h3>
      {todos.map((todo, index) => (
        <div key={index} className="bg-gray-200 p-2 m-2 rounded">
          {todo}
        </div>
      ))}
      <input
        type="text"
        placeholder="Add a new todo"
        className="border border-gray-300 p-2 rounded"
        onKeyDown={onTodoInputKeyDown}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={() => {
          const newTodo = prompt('Enter a new todo');
          if (newTodo) {
            setTodos([...todos, newTodo]);
          }
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default App;
