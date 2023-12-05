import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "../icons/DeleteIcon";
import { ToastContainer, toast } from "react-toastify";
import { toastConfig } from "../../Utils/constants";
import "react-toastify/dist/ReactToastify.css";
import { getTeamState, setTeamMembers } from "../../store/slices/teamSlice";
import { useEffect, useState } from "react";
import UserDetailsCard from "./UserDetailsCard";
import { deleteUser, getUserListState, updateUserList } from "../../store/slices/userListSlice";

const UserCard = (props) => {
  const [isAdded, setAdded] = useState(false);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const userList = useSelector(getUserListState).userList;

  const teamMembers = useSelector(getTeamState).teamMembers;

  const dispatch = useDispatch();

  useEffect(() => {
    const isMemberAdded = teamMembers.some(
      (member) => member.id === props.userData.id
    );
    setAdded(isMemberAdded);
  }, [props.userData.id, teamMembers]);

  const TeamSelectHandler = async () => {
    if (teamMembers.length < 4) {
      const isDomainUnique = teamMembers.every(
        (member) => member.domain !== props.userData.domain
      );

      if (isDomainUnique) {
        const updatedTeamMembers = [...teamMembers, props.userData];
        await dispatch(setTeamMembers(updatedTeamMembers));
      } else {
        toast.warning("Select User from Different Domain !", toastConfig);
      }
    } else {
      toast.warning("Team Full !", toastConfig);
    }
  };

  const DeleteHandler = async () => {
    await dispatch(deleteUser(props.userData.id));
    const updatedUserList = userList.filter(
      (user) => user.id !== props.userData.id
    );
    await dispatch(updateUserList(updatedUserList));
    toast.success("User Deleted Successfully", toastConfig);
  };

  const ViewDetailsHandler = () => {
    setDetailsModalOpen(true);
  };

  const CloseDetailsModalHandler = () => {
    setDetailsModalOpen(false);
  };

  return (
    <div className="w-fit sm:w-full mx-auto md:items-center bg-blue-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <button onClick={DeleteHandler}>
          <DeleteIcon />
        </button>
      </div>
      <div className="flex flex-col items-center pb-6">
        <img
          className="w-20 h-20 mb-3 bg-white rounded-full"
          src={props.userData.avatar}
          alt=""
        />
        <h5 className="text-lg font-medium text-gray-900 dark:text-white">
          {props.userData.first_name} {props.userData.last_name}
        </h5>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {props.userData.domain}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          {props.userData.gender}
        </span>
        <div className="flex mt-4 md:mt-6 px-4">
          <button
            className="inline-flex items-center px-4 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={ViewDetailsHandler}
          >
            View Details
          </button>
          <button
            className={`${
              props.userData.available === true
                ? !isAdded
                  ? "bg-green-500 text-white hover:bg-green-400 hover:text-white"
                  : "bg-green-300"
                : "bg-red-300"
            } inline-flex items-center px-4 py-2 text-xs font-medium text-center border border-gray-300 rounded-lg focus:ring-2 focus:outline-none focus:ring-green-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3`}
            disabled={props.userData.available === false || isAdded}
            onClick={TeamSelectHandler}
          >
            {props.userData.available === true
              ? isAdded
                ? "Added"
                : "Add to Team"
              : "Unavalilable"}
          </button>
        </div>
      </div>
      <UserDetailsCard
        isOpen={isDetailsModalOpen}
        onClose={CloseDetailsModalHandler}
        user={props.userData}
      />
      <ToastContainer />
    </div>
  );
};

export default UserCard;
