export enum TodoStatusOptions {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
  IN_PROGRESS = 'In-progress',
}

export enum TodoPriorityOptions {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export type TodoStatus =
  (typeof TodoStatusOptions)[keyof typeof TodoStatusOptions];
export type TodoPriority =
  (typeof TodoPriorityOptions)[keyof typeof TodoPriorityOptions];

export interface Todo {
  id: string;
  title: string;
  status?: TodoStatus;
  priority?: TodoPriority;
  createdAt?: Date;
}

export interface Filters {
  [TodoStatusOptions.COMPLETED]: boolean;
  [TodoStatusOptions.PENDING]: boolean;
  [TodoStatusOptions.IN_PROGRESS]: boolean;
}
