import { Todo as TodoType } from '@my-todos/shared-types';
import { Modal } from '@my-todos/shared-ui';
import { useState } from 'react';
import { useFilterTodos } from '../hooks/useFilterTodos';
import Todo from './Todo';
import TodoDetails from './TodoDetails';

const TodoList = () => {
  const { filteredTodos } = useFilterTodos();
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTodoClick = (
    event: React.MouseEvent<HTMLDivElement>,
    todo: TodoType
  ) => {
    const allowedNodes = ['DIV', 'LABEL', 'SPAN'];
    const clickedNode = event.target.nodeName || '';

    if (allowedNodes.includes(clickedNode)) {
      event.stopPropagation();
      setSelectedTodo(todo);
      setIsModalOpen(true);
    }
  };

  return (
    <div
      className={`md:max-h-80 overflow-y-scroll ${
        filteredTodos.length && 'min-h-20 py-5'
      } `}
    >
      {selectedTodo && (
        <Modal
          title={selectedTodo.title}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <TodoDetails todo={selectedTodo} />
        </Modal>
      )}
      {filteredTodos.map((todo, index) => (
        <div
          key={todo.status + index + todo.priority}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            handleTodoClick(e, todo);
          }}
        >
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
