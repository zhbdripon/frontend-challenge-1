import { FcFilledFilter } from 'react-icons/fc';

import { Filters, TodoStatusOptions } from '@my-todos/shared-types';
import { useRecoilState } from 'recoil';
import { filterState } from '../atoms';

const StatusFilter = () => {
  const [filters, setFilters] = useRecoilState<Filters>(filterState);

  const handleStatusFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const status = event.target.value as TodoStatusOptions;
    const isChecked = event.target.checked;

    setFilters({
      ...filters,
      [status]: isChecked,
    });
  };

  return (
    <div className="flex flex-row items-center">
      <FcFilledFilter className="mr-2" />
      <span className="text-gray-500 text-sm mr-2 pb-1">Status:</span>
      {Object.values(TodoStatusOptions).map((status) => (
        <label key={status} className="flex space-x-2 mr-2">
          <input
            type="checkbox"
            checked={filters[status]}
            value={status}
            className="form-checkbox"
            onChange={handleStatusFilterChange}
          />
          <span>{status}</span>
        </label>
      ))}
    </div>
  );
};

export default StatusFilter;
