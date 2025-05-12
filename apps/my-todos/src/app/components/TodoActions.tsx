import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { Todo, TodoStatusOptions } from '@my-todos/shared-types';
import { ConfirmDialogue, Popover, Tooltip } from '@my-todos/shared-ui';

import { ImClock } from 'react-icons/im';
import { MdDoneOutline } from 'react-icons/md';
import { RiProgress3Fill } from 'react-icons/ri';
import { TiDeleteOutline } from 'react-icons/ti';
import { useTodos } from '../hooks/useTodos';
import StatusBadge from './StatusBadge';

const STATUS_UPDATE_ACTION = {
  [TodoStatusOptions.IN_PROGRESS]: {
    tooltip: 'Mark as Completed',
    toastMessage: 'Marked as Completed',
    changeStatus: TodoStatusOptions.COMPLETED,
    icon: MdDoneOutline,
    iconColor: 'text-green-500',
    iconSize: 23,
  },
  [TodoStatusOptions.PENDING]: {
    tooltip: 'Move to In-Progress',
    toastMessage: 'Moved to In-Progress',
    changeStatus: TodoStatusOptions.IN_PROGRESS,
    icon: RiProgress3Fill,
    iconColor: 'text-blue-500',
    iconSize: 22,
  },
  [TodoStatusOptions.COMPLETED]: {
    tooltip: 'Move to Pending',
    toastMessage: 'Moved to Pending',
    changeStatus: TodoStatusOptions.PENDING,
    icon: ImClock,
    iconColor: 'text-yellow-500',
    iconSize: 21,
  },
};

const TodoActions = ({ todo }: { todo: Todo }) => {
  const { removeTodo, updateTodo } = useTodos();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const statusAction = STATUS_UPDATE_ACTION[todo.status];
  const ActionIcon = statusAction.icon;

  return (
    <div className="flex flex-row items-center [&>*]:mx-1">
      <StatusBadge status={todo.status} />
      <Tooltip text="Delete todo">
        <button ref={buttonRef} onClick={() => setIsOpen((prev) => !prev)}>
          <TiDeleteOutline size={24} color="red" className="cursor-pointer" />
        </button>
      </Tooltip>
      <Popover
        triggerRef={buttonRef}
        horizontalPosition={'left'}
        verticalPosition={'center'}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ConfirmDialogue
          confirmationText={`Are you sure?`}
          onConfirm={() => {
            removeTodo(todo.id);
            setIsOpen(false);
            toast.success(`Todo ${todo.title} deleted!`);
          }}
          onCancel={() => {
            setIsOpen(false);
          }}
        />
      </Popover>

      <Tooltip text={statusAction.tooltip}>
        <button
          onClick={() => {
            toast.success(statusAction.toastMessage);
            updateTodo(todo.id, { status: statusAction.changeStatus });
          }}
        >
          <ActionIcon
            className={statusAction.iconColor}
            size={statusAction.iconSize}
          />
        </button>
      </Tooltip>
    </div>
  );
};

export default TodoActions;
