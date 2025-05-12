import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { selectedTodoState, showTodoFormState, todoState } from '../atoms';
import { Todo } from '@my-todos/shared-types';
import { saveTodosToLocalStorage } from '../utils';

interface useTodosReturn {
  todos: Todo[];
  addTodo: (newTodo: Todo) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, updatedTodo: Partial<Todo>) => void;
  showCreateTodoForm: () => void;
}

export function useTodos(): useTodosReturn {
  const [todos, setTodos] = useRecoilState(todoState);
  const [, setSelectedTodo] = useRecoilState(selectedTodoState);
  const [, setShowTodoForm] = useRecoilState(showTodoFormState);

  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
    setSelectedTodo(null);
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setSelectedTodo(null);
  };

  const updateTodo = (id: string, updatedTodo: Partial<Todo>) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
    );
    setSelectedTodo(null);
  };

  const showCreateTodoForm = () => {
    setSelectedTodo(null);
    setShowTodoForm(true);
  };

  return {
    todos,
    addTodo,
    removeTodo,
    updateTodo,
    showCreateTodoForm,
  };
}
