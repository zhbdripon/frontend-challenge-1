import {
  Filters,
  SortFieldEnum,
  Todo,
  TodoStatusOptions,
} from '@my-todos/shared-types';
import { atom } from 'recoil';
import { getTodosFromLocalStorage } from './utils';

export const todoState = atom({
  key: 'todoState',
  default: getTodosFromLocalStorage() as Todo[],
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
    field: 'none' as SortFieldEnum,
    order: 'asc' as 'asc' | 'desc',
  },
});
