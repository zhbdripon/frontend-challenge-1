import { useTodos } from '../hooks/useTodos';
import Todo from './Todo';

const TodoList = () => {
  const { todos } = useTodos();

  return (
    <>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </>
  );
};

export default TodoList;
