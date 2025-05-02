import React from 'react';
import { FcPlus } from 'react-icons/fc';
import { useTodos } from '../hooks/useTodos';
import { getDefaultTodoFromTitle } from '../utils';

const TodoAdd = () => {
  const [newTodo, setNewTodo] = React.useState('');
  const { addTodo } = useTodos();

  const onTodoInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo(getDefaultTodoFromTitle(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className="flex items-center justify-start p-2 rounded">
      <FcPlus size={24} />
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        type="text"
        placeholder="Add a new todo"
        className="border-y-1 border-gray-300 p-2 focus:outline-none w-todo-add-input"
        onKeyDown={onTodoInputKeyDown}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded ml-2"
        onClick={() => {
          if (newTodo) {
            addTodo(getDefaultTodoFromTitle(newTodo));
            setNewTodo('');
          }
        }}
      >
        Add Item
      </button>
    </div>
  );
};

export default TodoAdd;
