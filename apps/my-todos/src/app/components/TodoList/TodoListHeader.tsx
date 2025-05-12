import { FcPlus } from 'react-icons/fc';

import { useFilterTodos } from '../../hooks/useFilterTodos';
import { useScreenSize } from '../../hooks/useScreenSize';
import { useTodos } from '../../hooks/useTodos';
import TodoControls from '../TodoControls';

const TodoListHeader = () => {
  const { count } = useFilterTodos();
  const { isLargeScreen, isMediumScreen, isSmallScreen } = useScreenSize();
  const { showCreateTodoForm } = useTodos();

  const todoCountPrompt =
    count > 0
      ? `Total ${count} todo(s) with the given filters`
      : 'No todos with the given filters';

  return (
    <div>
      <div className="flex md:flex-row flex-col justify-between items-center">
        {isLargeScreen && (
          <div>
            <h1 className="font-bold text-lg">Todo List</h1>
          </div>
        )}
        <TodoControls />
      </div>
      <div className="flex flex-row justify-between items-end p-1 mx-1 sm:mt-1 mt-4">
        <label className="text-xs">{todoCountPrompt}</label>
        {(isMediumScreen || isSmallScreen) && (
          <button onClick={showCreateTodoForm}>
            <FcPlus size={32} />{' '}
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoListHeader;
