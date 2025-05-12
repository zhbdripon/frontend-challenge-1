import { useRecoilState } from 'recoil';

import { selectedTodoState } from '../atoms';
import { useScreenSize } from '../hooks/useScreenSize';
import TodoForm from './TodoForm';

export function TodoListContainer() {}

const TodoAdd = () => {
  const [selectedTodo] = useRecoilState(selectedTodoState);
  const { isLargeScreen } = useScreenSize();

  if (!isLargeScreen) {
    return null;
  }
  return (
    <div className="lg:w-[40%] pt-6 shadow-md rounded-md px-2">
      <h1 className="font-bold text-lg">
        {selectedTodo
          ? `Update todo "${selectedTodo.title}"`
          : 'Create a new todo'}
      </h1>
      <TodoForm key={selectedTodo?.id} />
    </div>
  );
};

export default TodoAdd;
