import { useFilterTodos } from '../hooks/useFilterTodos';
import Todo from './Todo';

const TodoList = () => {
  const { filteredTodos } = useFilterTodos();

  return (
    <>
      {filteredTodos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
