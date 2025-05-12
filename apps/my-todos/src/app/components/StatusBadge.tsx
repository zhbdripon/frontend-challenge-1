import { TodoStatusOptions } from '@my-todos/shared-types';

const textColors = {
  [TodoStatusOptions.COMPLETED]: 'text-green-500',
  [TodoStatusOptions.PENDING]: 'text-yellow-500',
  [TodoStatusOptions.IN_PROGRESS]: 'text-blue-500',
};

const bgColors = {
  [TodoStatusOptions.COMPLETED]: 'bg-green-100',
  [TodoStatusOptions.PENDING]: 'bg-yellow-100',
  [TodoStatusOptions.IN_PROGRESS]: 'bg-blue-100',
};

const StatusBadge = ({ status }: { status: TodoStatusOptions }) => {
  const textColor = textColors[status];
  const bgColor = bgColors[status];

  return (
    <span
      className={`${textColor} ${bgColor} text-xs font-bold px-1 inline-flex items-center rounded-sm`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
