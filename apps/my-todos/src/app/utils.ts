import {
  Todo,
  TodoPriorityOptions,
  TodoStatusOptions,
} from '@my-todos/shared-types';

export function generateUniqueId(): string {
  const randomPart = Math.floor(Math.random() * 1000000);
  const datePart = Date.now();
  return `id-${randomPart}-${datePart}`;
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getDefaultTodoFromTitle(title: string, notes?: string): Todo {
  return {
    id: generateUniqueId(),
    title,
    status: TodoStatusOptions.PENDING,
    priority: TodoPriorityOptions.MEDIUM,
    createdAt: new Date(),
    notes: notes || '',
  };
}

export function saveTodosToLocalStorage(todos: Todo[]): void {
  localStorage.setItem('todos', JSON.stringify(todos));
}

export function getTodosFromLocalStorage(): Todo[] {
  try {
    const todos = localStorage.getItem('todos');
    return todos
      ? JSON.parse(todos).map((todo: Todo) => ({
          ...todo,
          createdAt: todo.createdAt ? new Date(todo.createdAt) : null,
        }))
      : [];
  } catch (error) {
    console.error('Error parsing todos from localStorage:', error);
    return [];
  }
}

export function timeAgo(date: Date): string {
  const now = new Date();
  const dateObj = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return 'Just now';
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }
}
