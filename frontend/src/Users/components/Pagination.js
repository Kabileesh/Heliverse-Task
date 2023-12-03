import { useDispatch, useSelector } from "react-redux";
import {
  getUserListState,
  updatePageNumber,
} from "../../store/slices/userListSlice";

const Pagination = () => {
  const dispatch = useDispatch();
  const { pageCount, pageNumber } = useSelector(getUserListState);

  const handlePageChange = async (pageNumber) => {
    await dispatch(updatePageNumber(pageNumber));
  };

  const renderPageNumbers = () => {
    const range = 2;
    const startPage = Math.max(
      1,
      parseInt(parseInt(pageNumber) - parseInt(range))
    );
    const endPage = Math.min(
      parseInt(pageCount),
      parseInt(parseInt(pageNumber) + parseInt(range))
    );

    return [...Array(endPage - startPage + 1).keys()].map((index) => (
      <li key={startPage + index}>
        <button
          className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border ${
            startPage + index === parseInt(pageNumber)
              ? "bg-slate-600 text-white hover:bg-gray-500 hover:text-white"
              : "border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          } `}
          onClick={() => handlePageChange(startPage + index)}
        >
          {startPage + index}
        </button>
      </li>
    ));
  };
  return (
    <div className="flex items-center justify-center mt-6">
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled={parseInt(pageNumber) === 1}
              onClick={() => handlePageChange(parseInt(pageNumber) - 1)}
            >
              Previous
            </button>
          </li>
          {renderPageNumbers()}
          <li>
            <button
              className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              disabled={parseInt(pageNumber) === parseInt(pageCount)}
              onClick={() => handlePageChange(parseInt(pageNumber) + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
