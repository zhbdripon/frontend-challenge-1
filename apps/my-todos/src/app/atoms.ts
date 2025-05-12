import {
  Filters,
  SortFieldEnum,
  Todo,
  TodoStatusOptions,
} from '@my-todos/shared-types';
import { atom } from 'recoil';
import { getTodosFromLocalStorage } from './utils';
import todos from './data.json';

const todosFromLocalStorage = getTodosFromLocalStorage();
const initialTodos =
  todosFromLocalStorage.length > 0 ? todosFromLocalStorage : todos;

export const todoState = atom({
  key: 'todoState',
  default: initialTodos as Todo[],
});

export const filterState = atom({
  key: 'filterState',
  default: {
    [TodoStatusOptions.COMPLETED]: true,
    [TodoStatusOptions.IN_PROGRESS]: true,
    [TodoStatusOptions.PENDING]: true,
  } as Filters,
});

export const sortState = atom({
  key: 'sortState',
  default: {
    field: SortFieldEnum.CREATED_AT,
    order: 'desc' as 'asc' | 'desc',
  },
});

export const selectedTodoState = atom({
  key: 'selectedTodoStatus',
  default: null as Todo | null,
});

export const showTodoFormState = atom({
  key: 'showTodoFormState',
  default: false as boolean,
});
