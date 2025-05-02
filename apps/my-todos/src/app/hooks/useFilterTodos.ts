import { Todo } from '@my-todos/shared-types';
import { useRecoilState } from 'recoil';
import { filterState, todoState } from '../atoms';

export function useFilterTodos(): { filteredTodos: Todo[] } {
  const [todos] = useRecoilState<Todo[]>(todoState);
  const [filters] = useRecoilState(filterState);

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filters && todo.status) {
      return filters[todo.status];
    }
    return true;
  });

  return { filteredTodos };
}
