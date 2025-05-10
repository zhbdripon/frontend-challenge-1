import React, { useEffect, useRef, useState } from 'react';
import { FcPlus } from 'react-icons/fc';
import { useTodos } from '../hooks/useTodos';
import { getDefaultTodoFromTitle } from '../utils';

const TodoAdd = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const titleInputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodos();

  useEffect(() => {
    if (titleInputRef && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  const resetForm = () => {
    setTitle('');
    setNote('');
  };

  const onTodoInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo(getDefaultTodoFromTitle(title, note));
      resetForm();
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.target.style.height = 'auto';
    event.target.style.height = `${event.target.scrollHeight}px`;
  };

  return (
    <div className="">
      <div className="flex items-center justify-start p-2 rounded">
        <FcPlus size={24} />
        <input
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          type="text"
          placeholder="Add a new todo"
          className="border-1 border-gray-300 p-2 focus:outline-none w-todo-add-input rounded-md mx-1"
          onKeyDown={onTodoInputKeyDown}
          ref={titleInputRef}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded"
          onClick={() => {
            if (title) {
              addTodo(getDefaultTodoFromTitle(title, note));
              resetForm();
            }
          }}
        >
          Add Item
        </button>
      </div>
      <div className="px-2">
        <textarea
          value={note}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNote(e.target.value)
          }
          placeholder="Add an optional note..."
          onInput={handleInput}
          className="max-h-16 overflow-hidden p-2 border-2 rounded-md w-full outline-gray-300 text-sm"
        ></textarea>
      </div>
    </div>
  );
};

export default TodoAdd;
