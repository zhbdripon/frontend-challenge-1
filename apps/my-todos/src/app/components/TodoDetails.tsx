import { Todo as TodoType } from '@my-todos/shared-types';
import { timeAgo } from '../utils';
import TodoPrioritySelect from './TodoPrioritySelect';
import TodoStatusSelect from './TodoStatusSelect';

const TodoDetails = ({ todo }: { todo: TodoType }) => {

  return (
    <>
      <label className="text-green-800 mb-1 mr-4">
        Created: {timeAgo(todo.createdAt)}
      </label>
      <div className="flex flex-row mb-1">
        <label className="text-green-800 mr-4 font-bold">Priority: </label>
        <TodoPrioritySelect todo={todo} />
      </div>
      <div className="flex flex-row mb-1">
        <label className="text-green-800 mr-4 font-bold">Status: </label>
        <TodoStatusSelect todo={todo} />
      </div>
      {todo.notes && (
        <div>
          <label className="text-green-800 font-bold">Notes: </label>
          <p>{todo.notes}</p>
        </div>
      )}
    </>
  );
};

export default TodoDetails;
