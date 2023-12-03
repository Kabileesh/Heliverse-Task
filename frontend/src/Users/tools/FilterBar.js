import { useDispatch, useSelector } from "react-redux";
import DomainDropDown from "../components/DomainDropDown";
import GenderRadioButton from "../components/GenderRadioButton";
import SearchIcon from "../icons/SearchIcon";
import {
  getUserList,
  getUserListState,
  setUserList,
} from "../../store/slices/userListSlice";
import ToggleButton from "../components/ToggleButton";

const FilterBar = () => {
  const dispatch = useDispatch();

  const filterData = useSelector(getUserListState).filterData;
  const page = useSelector(getUserListState).pageNumber;

  const filterHandler = async () => {
    const userList = await dispatch(getUserList({ page, filterData }));
    await dispatch(setUserList(userList.payload.filteredUserDetails));
  };

  return (
    <div>
      <div className="flex flex-wrap gap-5 mb-2">
        <div>
          <GenderRadioButton />
        </div>
        <div>
          <DomainDropDown />
        </div>
        <div>
          <ToggleButton />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={filterHandler}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
