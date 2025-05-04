import { SortFieldEnum, SortOptions } from '@my-todos/shared-types';
import React from 'react';
import {
  FcGenericSortingAsc,
  FcNumericalSorting12,
  FcNumericalSorting21,
} from 'react-icons/fc';
import { useRecoilState } from 'recoil';
import { sortState } from '../atoms';
import { capitalizeFirstLetter } from '../utils';

const TodoSort = () => {
  const [sort, setSort] = useRecoilState<SortOptions>(sortState);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = event.target.value as SortFieldEnum;

    setSort((prevSort) => ({
      ...prevSort,
      field: selectedSort,
      order:
        selectedSort === prevSort.field
          ? prevSort.order === 'asc'
            ? 'desc'
            : 'asc'
          : 'asc',
    }));
  };

  const SortIcon =
    sort.field && sort.order === 'asc'
      ? FcNumericalSorting12
      : FcNumericalSorting21;

  return (
    <div className="flex flex-row items-center">
      <FcGenericSortingAsc className="mr-2" />
      <label htmlFor="sort-select" className="text-gray-500 text-sm mr-2 pb-1">
        Sort By:
      </label>
      <select
        id="sort-select"
        onChange={handleSortChange}
        className="p-2 rounded outline-none"
        defaultValue={SortFieldEnum.CREATED_AT}
      >
        {Object.values(SortFieldEnum).map((option) => {
          return (
            <option key={option} value={option} >
              {option === SortFieldEnum.CREATED_AT
                ? 'Created'
                : capitalizeFirstLetter(option)}
            </option>
          );
        })}
      </select>

      <SortIcon
        className="ml-2 cursor-pointer"
        onClick={() => {
          setSort((prevSort) => ({
            ...prevSort,
            order: prevSort.order === 'asc' ? 'desc' : 'asc',
          }));
        }}
      />
    </div>
  );
};

export default TodoSort;
