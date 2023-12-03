import { useDispatch, useSelector } from "react-redux";
import {
  getUserListState,
  updateFilterDataGender,
} from "../../store/slices/userListSlice";

const GenderRadioButton = () => {
  const genders = ["Male", "Female"];

  const dispatch = useDispatch();
  const genderFilter = useSelector(getUserListState).filterData.gender;

  const genderSelectHandler = async (e) => {
    await dispatch(updateFilterDataGender(e.target.value));
  };

  return (
    <div className="flex">
      {genders.map((gender, index) => {
        return (
          <div className="flex items-center me-4 mt-2" key={index}>
            <input
              id="inline-radio"
              type="radio"
              value={gender}
              checked={genderFilter === gender}
              name="inline-radio-group"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={genderSelectHandler}
            />
            <label
              htmlFor="inline-radio"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {gender}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default GenderRadioButton;
