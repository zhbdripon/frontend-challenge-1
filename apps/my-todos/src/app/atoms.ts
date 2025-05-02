import { atom } from 'recoil';
import { Todo } from '@my-todos/shared-types';
import { getTodosFromLocalStorage } from './utils';

export const todoState = atom({
  key: 'todoState',
  default: getTodosFromLocalStorage() as Todo[], 
});