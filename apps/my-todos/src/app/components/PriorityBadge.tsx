import { TodoPriorityOptions } from '@my-todos/shared-types';

const textColors = {
  [TodoPriorityOptions.HIGH]: 'text-crimson-500',
  [TodoPriorityOptions.MEDIUM]: 'text-amber-500',
  [TodoPriorityOptions.LOW]: 'text-teal-500',
};

const bgColors = {
  [TodoPriorityOptions.HIGH]: 'bg-crimson-100',
  [TodoPriorityOptions.MEDIUM]: 'bg-amber-100',
  [TodoPriorityOptions.LOW]: 'bg-teal-100',
};

const PriorityBadge = ({ priority }: { priority: TodoPriorityOptions }) => {
  const textColor = textColors[priority];
  const bgColor = bgColors[priority];

  return (
    <span
      className={`${textColor} ${bgColor} text-xs font-bold px-1 ml-1 inline-flex items-center rounded-sm `}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;
