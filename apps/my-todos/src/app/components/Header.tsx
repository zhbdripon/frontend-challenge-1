import { FcPlus } from 'react-icons/fc';
import { LuListTodo } from 'react-icons/lu';

import { useScreenSize } from '../hooks/useScreenSize';
import { useTodos } from '../hooks/useTodos';

const Header = () => {
  const { isXSmallScreen } = useScreenSize();
  const { showCreateTodoForm } = useTodos();

  return (
    <div className="w-full text-black flex justify-between lg:mb-8 h-14 items-center text-xl rounded-b-lg">
      <div className="flex justify-start">
        <LuListTodo className="mr-2 text-2xl pt-[0.125rem]" />
        <span className="font-bold">My Todos</span>
      </div>
      {isXSmallScreen && (
        <button onClick={showCreateTodoForm} className="absolute right-5 top-3">
          <FcPlus size={40} />{' '}
        </button>
      )}
    </div>
  );
};

export default Header;
