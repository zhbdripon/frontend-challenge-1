import { zodResolver } from '@hookform/resolvers/zod';
import { TodoPriorityOptions, TodoStatusOptions } from '@my-todos/shared-types';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import * as z from 'zod';

import { selectedTodoState, showTodoFormState } from '../atoms';
import { useScreenSize } from '../hooks/useScreenSize';
import { useTodos } from '../hooks/useTodos';
import { generateUniqueId } from '../utils';
import PriorityBadge from './PriorityBadge';
import StatusBadge from './StatusBadge';

const todoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  priority: z.nativeEnum(TodoPriorityOptions),
  status: z.nativeEnum(TodoStatusOptions),
  notes: z.string().optional(),
});

type TodoFormValues = z.infer<typeof todoSchema>;

const TodoForm = () => {
  const { isLargeScreen } = useScreenSize();
  const [selectedTodo, setSelectedTodo] = useRecoilState(selectedTodoState);
  const [_, setShowTodoFormModal] = useRecoilState(showTodoFormState);
  const { addTodo, updateTodo } = useTodos();
  const {
    handleSubmit,
    setFocus,
    register,
    reset,
    formState: { errors },
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      title: selectedTodo?.title || '',
      priority: selectedTodo?.priority || TodoPriorityOptions.MEDIUM,
      status: selectedTodo?.status || TodoStatusOptions.PENDING,
      notes: selectedTodo?.notes || '',
    },
  });

  useEffect(() => {
    setFocus('title');
  }, [setFocus]);

  const closeForm = () => {
    setShowTodoFormModal(false);
    setSelectedTodo(null);
    reset();
  };

  const onSubmit = (data: TodoFormValues) => {
    if (selectedTodo) {
      updateTodo(selectedTodo.id, data);
      closeForm();
      toast.success('Todo updated!');
      return;
    }

    addTodo({
      id: generateUniqueId(),
      createdAt: new Date(),
      ...data,
    });
    toast.success('Todo created!');
    closeForm();
  };

  const onTodoInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(onSubmit);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Title
        </label>
        <input
          id="title"
          placeholder="Add a new todo"
          {...register('title')}
          className="h-10 px-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline-none"
        />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div>
        <p className="block text-sm font-medium">Priority</p>
        <div className="flex space-x-4">
          {Object.values(TodoPriorityOptions).map((priority) => (
            <label key={priority} className="flex items-center space-x-2">
              <input
                type="radio"
                value={priority}
                {...register('priority')}
                className="form-radio"
              />
              <PriorityBadge priority={priority} />
            </label>
          ))}
        </div>
        {errors.priority && (
          <p className="text-red-500 text-sm">{errors.priority.message}</p>
        )}
      </div>

      <div>
        <p className="block text-sm font-medium">Status</p>
        <div className="flex space-x-4">
          {Object.values(TodoStatusOptions).map((status) => (
            <label key={status} className="flex items-center space-x-2">
              <input
                type="radio"
                value={status}
                {...register('status')}
                className="form-radio"
                onKeyDown={onTodoInputKeyDown}
              />
              <StatusBadge status={status} />
            </label>
          ))}
        </div>
        {errors.status && (
          <p className="text-red-500 text-sm">{errors.status.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium">
          Notes
        </label>
        <textarea
          id="notes"
          placeholder="Add an optional note..."
          {...register('notes')}
          className="mt-1 p-2 max-h-16 outline-none block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
        />
      </div>

      <div className="w-full flex justify-end [&>*]:mx-1">
        <button
          type="submit"
          className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          {selectedTodo ? 'Update' : 'Create'}
        </button>
        {isLargeScreen && selectedTodo && (
          <button
            onClick={() => {
              setSelectedTodo(null);
              setShowTodoFormModal(false);
              reset();
            }}
            className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Create New
          </button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
