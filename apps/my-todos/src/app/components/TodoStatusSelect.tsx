import React, { useState } from 'react';

import { Todo, TodoStatusOptions } from '@my-todos/shared-types';
import { capitalizeFirstLetter } from '../utils';
import { useTodos } from '../hooks/useTodos';

const TodoStatusSelect = ({ todo }: { todo: Todo }) => {
    const { updateTodo } = useTodos();
  const [status, setStatus] = useState<TodoStatusOptions>(
    todo?.status || TodoStatusOptions.PENDING
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value as TodoStatusOptions);
    updateTodo(todo.id, { status: event.target.value as TodoStatusOptions });
  };

  const getStatusColor = (status: TodoStatusOptions) => {
    switch (status) {
      case TodoStatusOptions.PENDING:
        return 'bg-yellow-500';
      case TodoStatusOptions.COMPLETED:
        return 'bg-green-500';
      case TodoStatusOptions.IN_PROGRESS:
        return 'bg-blue-500';
      default:
        return 'bg-yellow-500';
    }
  };

  return (
      <select
        id="status-select"
        value={status}
        onChange={handleChange}
        className={`pb-1 border rounded outline-none text-white ${getStatusColor(status)}`}
      >
        {Object.values(TodoStatusOptions).map((option) => (
          <option key={option} value={option}>
            {capitalizeFirstLetter(option)}
          </option>
        ))}
      </select>
  );
};

export default TodoStatusSelect;
