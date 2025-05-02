import { atom } from 'recoil';
import { Todo } from '@my-todos/shared-types';

export const todoState = atom({
  key: 'todoState',
  default: [] as Todo[], 
});