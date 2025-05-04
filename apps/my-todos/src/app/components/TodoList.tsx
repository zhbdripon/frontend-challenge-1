import { useFilterTodos } from '../hooks/useFilterTodos';
import { Todo as TodoType } from '@my-todos/shared-types';
import Todo from './Todo';
import { Modal } from '@my-todos/shared-ui';
import TodoDetails from './TodoDetails';
import { useState } from 'react';

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
      console.log('Empty space clicked', todo);
    }
  };

  return (
    <>
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
    </>
  );
};

export default TodoList;
