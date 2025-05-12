import { useRecoilState } from 'recoil';
import { Todo as TodoType } from '@my-todos/shared-types';
import { Modal } from '@my-todos/shared-ui';

import { selectedTodoState, showTodoFormState } from '../../atoms';
import { useFilterTodos } from '../../hooks/useFilterTodos';
import { useScreenSize } from '../../hooks/useScreenSize';
import Todo from '../Todo';
import TodoForm from '../TodoForm';

const TodoList = () => {
  const { filteredTodos } = useFilterTodos();
  const { width } = useScreenSize();
  const [selectedTodo, setSelectedTodo] = useRecoilState<TodoType | null>(
    selectedTodoState
  );
  const [isModalOpen, setIsModalOpen] = useRecoilState(showTodoFormState);

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
    <div className="max-h-list-container overflow-y-scroll">
      {(selectedTodo || isModalOpen) && width < 1024 && (
        <Modal
          title={selectedTodo ? 'Update todo' : 'Create a new todo'}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <TodoForm />
        </Modal>
      )}
      {filteredTodos.map((todo, index) => (
        <div
          className="cursor-pointer hover:rounded-md"
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
