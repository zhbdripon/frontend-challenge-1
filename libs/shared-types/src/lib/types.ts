export enum TodoStatusOptions {
  COMPLETED = 'completed',
  PENDING = 'pending',
  IN_PROGRESS = 'in-progress',
}

export enum TodoPriorityOptions {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
}

export type TodoStatus = (typeof TodoStatusOptions)[keyof typeof TodoStatusOptions];
export type TodoPriority = (typeof TodoPriorityOptions)[keyof typeof TodoPriorityOptions];

export interface Todo {
  id: string;
  title: string;
  status: TodoStatus;
  priority?: TodoPriority;
}