export enum TodoStatusOptions {
  COMPLETED = 'Completed',
  PENDING = 'Pending',
  IN_PROGRESS = 'In-progress',
}

export enum TodoPriorityOptions {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}

export type TodoStatus =
  (typeof TodoStatusOptions)[keyof typeof TodoStatusOptions];
export type TodoPriority =
  (typeof TodoPriorityOptions)[keyof typeof TodoPriorityOptions];

export interface Todo {
  id: string;
  title: string;
  status: TodoStatus;
  priority: TodoPriority;
  createdAt: Date;
  notes?: string;
}

export interface Filters {
  [TodoStatusOptions.COMPLETED]: boolean;
  [TodoStatusOptions.PENDING]: boolean;
  [TodoStatusOptions.IN_PROGRESS]: boolean;
}

export enum SortFieldEnum {
  TITLE = 'title',
  STATUS = 'status',
  CREATED_AT = 'createdAt',
  PRIORITY = 'priority',
}

export interface SortOptions {
  field: SortFieldEnum;
  order: 'asc' | 'desc';
}
