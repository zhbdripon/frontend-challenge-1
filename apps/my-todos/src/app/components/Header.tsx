import { LuListTodo } from 'react-icons/lu';

const Header = () => {
  return (
    <div className="w-svw flex justify-center mb-8 h-14 text-white bg-green-600 items-center text-xl rounded-b-lg">
      <LuListTodo className="mr-2 text-2xl pt-[0.125rem]" />
      <span className="font-bold">My Todos</span>
    </div>
  );
};

export default Header;
