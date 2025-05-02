import React, { useState } from 'react';

import { Todo, TodoPriorityOptions } from '@my-todos/shared-types';
import { capitalizeFirstLetter } from '../utils';
import { useTodos } from '../hooks/useTodos';

const TodoPrioritySelect = ({ todo }: { todo: Todo }) => {
    const {updateTodo} = useTodos();
  const [priority, setPriority] = useState<TodoPriorityOptions>(
    todo.priority || TodoPriorityOptions.LOW
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(event.target.value as TodoPriorityOptions);
    updateTodo(todo.id, { priority: event.target.value as TodoPriorityOptions });
  };

  const getPriorityColor = (priority: TodoPriorityOptions) => {
    switch (priority) {
      case TodoPriorityOptions.HIGH:
        return 'border-red-500 text-red-500';
      case TodoPriorityOptions.MEDIUM:
        return 'border-yellow-500 text-yellow-500';
      case TodoPriorityOptions.LOW:
        return 'border-green-500 text-green-500';
      default:
        return 'border-yellow-500 text-yellow-500';
    }
  };

  return (
    <div className={` rounded ${getPriorityColor(priority)}`}>
      <select
        id="priority-select"
        value={priority}
        onChange={handleChange}
        className={`p-0 border-0 rounded  text-sm outline-none ${getPriorityColor(
          priority
        )}`}
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
