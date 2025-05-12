import { Todo as TodoType } from '@my-todos/shared-types';
import { timeAgo } from '../utils';
import PriorityBadge from './PriorityBadge';
import TodoActions from './TodoActions';

const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <div className="hover:bg-gray-100  border-1 p-1 m-1 rounded flex justify-between items-center">
      <div>
        <label className="text-black ml-1 text-md font-bold">
          {todo.title}
        </label>
        <div className="flex flex-row">
          <PriorityBadge priority={todo.priority} />
          {todo.createdAt && (
            <span className="text-gray-500 text-xs ml-2">
              {timeAgo(todo.createdAt)}
            </span>
          )}
        </div>
      </div>
      <TodoActions todo={todo} />
    </div>
  );
};

export default Todo;
