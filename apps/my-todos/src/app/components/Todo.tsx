import { Todo as TodoType } from '@my-todos/shared-types';
import { timeAgo } from '../utils';
import TodoPrioritySelect from './TodoPrioritySelect';
import TodoStatusSelect from './TodoStatusSelect';

const Todo = ({ todo }: { todo: TodoType }) => {
  return (
    <div className="border-b-2 m-2 rounded flex justify-between items-center">
      <div className="">
        <label className="text-green-800 text-xl">{todo.title}</label>
        <div className="flex flex-row">
          <TodoPrioritySelect key={todo.id} todo={todo} />
          {todo.createdAt && (
            <span className="text-gray-500 text-sm ml-2">
              {timeAgo(todo.createdAt)}
            </span>
          )}
        </div>
      </div>
      <TodoStatusSelect key={todo.id} todo={todo} />
    </div>
  );
};

export default Todo;
