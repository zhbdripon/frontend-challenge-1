import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { Todo as TodoType } from '@my-todos/shared-types';
import { timeAgo } from '../utils';
import TodoPrioritySelect from './TodoPrioritySelect';
import TodoStatusSelect from './TodoStatusSelect';
import { PopConfirm } from '@my-todos/shared-ui';
import { useTodos } from '../hooks/useTodos';

const Todo = ({ todo }: { todo: TodoType }) => {
  const { removeTodo } = useTodos();

  return (
    <div className=" border-b-2 m-1 rounded flex justify-between items-center">
      <div>
        <label className="text-green-600 ml-1 text-md md:text-lg">
          {todo.title}
        </label>
        <div className="flex flex-row">
          <TodoPrioritySelect key={todo.id} todo={todo} />
          {todo.createdAt && (
            <span className="text-gray-500 text-xs ml-2">
              {timeAgo(todo.createdAt)}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-row [&>*]:mx-1">
        <TodoStatusSelect key={todo.id} todo={todo} />
        <PopConfirm
          title="Delete the todo?"
          onConfirm={() => {
            removeTodo(todo.id);
            toast(`Todo ${todo.title} deleted!`, { icon: '✅' });
          }}
          placement="mid-left"
        >
          <TiDeleteOutline size={24} color="red" className="cursor-pointer" />
        </PopConfirm>
      </div>
    </div>
  );
};

export default Todo;
