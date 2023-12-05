/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDomainList,
  getUserListState,
  updateFilterDataDomain,
} from "../../store/slices/userListSlice";

const DomainDropDown = () => {
  const [domainList, setDomainList] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const domainFilter = useSelector(getUserListState).filterData.domain;

  useEffect(() => {
    const getDomain = async () => {
      const domains = await dispatch(getDomainList());
      setDomainList(domains.payload.domainList);
    };
    getDomain();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const domainSelectHandler = async (domain) => {
    await dispatch(updateFilterDataDomain(domain));
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative z-10">
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex p-2 ml-5 w-full items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button"
        onClick={toggleDropdown}
      >
        <span className="sr-only">Open user menu</span>
        {domainFilter ? domainFilter : "Select Domain"}
        <svg
          className={`w-2.5 h-2.5 ms-3 transform ${
            isDropdownOpen ? "rotate-180" : "rotate-0"
          } transition-transform`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          id="dropdownAvatarName"
          className="absolute top-full right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownAvatarNameButton"
          >
            {domainList.map((domain, index) => (
              <li key={index}>
                <button
                  className="block w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => domainSelectHandler(domain)}
                >
                  {domain}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DomainDropDown;
