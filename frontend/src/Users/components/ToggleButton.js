import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateFilterAvailableFilter } from "../../store/slices/userListSlice";

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const toggleHandler = async () => {
    setIsChecked((prev) => !prev);
    if (!isChecked) {
      await dispatch(updateFilterAvailableFilter(!isChecked));
    } else {
      await dispatch(updateFilterAvailableFilter(null));
    }
  };

  return (
    <div>
      <label className="relative inline-flex items-center mt-2 ml-8 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={toggleHandler}
        />
        <div className="w-7 h-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Availablity
        </span>
      </label>
    </div>
  );
};

export default ToggleButton;
