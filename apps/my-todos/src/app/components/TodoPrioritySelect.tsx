import React, { useState } from 'react';

import { Todo, TodoPriorityOptions } from '@my-todos/shared-types';
import { capitalizeFirstLetter } from '../utils';
import { useTodos } from '../hooks/useTodos';

const TodoPrioritySelect = ({ todo }: { todo: Todo }) => {
  const { updateTodo } = useTodos();
  const [priority, setPriority] = useState<TodoPriorityOptions>(
    todo.priority || TodoPriorityOptions.LOW
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value as TodoPriorityOptions);
    updateTodo(todo.id, {
      priority: event.target.value as TodoPriorityOptions,
    });
  };

  const priorityBgColor: Record<TodoPriorityOptions, string> = {
    [TodoPriorityOptions.HIGH]: 'text-red-500',
    [TodoPriorityOptions.MEDIUM]: 'text-yellow-500',
    [TodoPriorityOptions.LOW]: 'text-green-500',
  };

  return (
    <div className={` rounded ${priorityBgColor[priority]}`}>
      <select
        id="priority-select"
        value={priority}
        onChange={handleChange}
        className={`p-0 border-0 rounded  text-sm outline-none  `}
      >
        {Object.values(TodoPriorityOptions).map((option) => (
          <option key={option} value={option}>
            {capitalizeFirstLetter(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TodoPrioritySelect;
