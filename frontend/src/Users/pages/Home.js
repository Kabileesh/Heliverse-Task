import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import {
  getUserList,
  getUserListState,
  setUserList,
} from "../../store/slices/userListSlice";
import UserCard from "../components/UserCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import FilterBar from "../tools/FilterBar";
import TeamListBar from "../../Team/components/teamListBar";

const Home = () => {
  const dispatch = useDispatch();
  const userListDetails = useSelector(getUserListState);
  const filterData = userListDetails.filterData;

  useEffect(() => {
    const getUsersList = async () => {
      const list = await dispatch(
        getUserList({ page: userListDetails.pageNumber, filterData })
      );
      await dispatch(setUserList(list.payload.filteredUserDetails));
    };
    getUsersList();
  }, [dispatch, userListDetails.pageNumber, filterData]);

  return (
    <div>
      <NavBar />
      <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div className="flex-col justify-between items-start p-4">
          <div>
            <SearchBar />
          </div>
          <FilterBar />
        </div>

        <div>
          <TeamListBar />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          {userListDetails.userList.map((user) => {
            if (
              user.first_name
                .toLowerCase()
                .startsWith(userListDetails.nameFilter.toLowerCase())
            ) {
              return <UserCard key={user.id} userData={user} />;
            }
            return null;
          })}
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
