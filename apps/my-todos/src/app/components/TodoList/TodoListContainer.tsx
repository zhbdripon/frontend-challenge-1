import TodoList from './TodoList';
import TodoListHeader from './TodoListHeader';

const TodoListContainer = () => {
  return (
    <div className="w-full lg:w-[60%] lg:mr-6 shadow-md rounded-md p-2 md:p-4 h-list-area overflow-hidden ">
      <TodoListHeader />
      <TodoList />
    </div>
  );
};

export default TodoListContainer;
