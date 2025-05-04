import { SortFieldEnum, SortOptions, Todo } from '@my-todos/shared-types';
import { useRecoilState } from 'recoil';
import { filterState, sortState, todoState } from '../atoms';

interface UseFilterTodosReturn {
  filteredTodos: Todo[];
  count: number;
}
 

export function useFilterTodos(): UseFilterTodosReturn {
  const [todos] = useRecoilState<Todo[]>(todoState);
  const [filters] = useRecoilState(filterState);
  const [sort] = useRecoilState<SortOptions>(sortState);

  const filteredTodos = todos.filter((todo: Todo) => {
    if (filters && todo.status) {
      return filters[todo.status];
    }
    return true;
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sort) {
      const field = sort.field;
      const order = sort.order === 'asc' ? 1 : -1;

      if (field === SortFieldEnum.PRIORITY) {
        const priorityOrder = {
          Low: 1,
          Medium: 2,
          High: 3,
        };
        return (priorityOrder[a.priority] - priorityOrder[b.priority]) * order;
      }

      if (field === SortFieldEnum.STATUS) {
        const statusOrder = {
          Pending: 1,
          'In-progress': 2,
          Completed: 3,
        };
        return (statusOrder[a.status] - statusOrder[b.status]) * order;
      }

      if (a[field] < b[field]) return -1 * order;
      if (a[field] > b[field]) return 1 * order;
    }
    return 0;
  });

  return { filteredTodos: sortedTodos, count: filteredTodos.length };
}
