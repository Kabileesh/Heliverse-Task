import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "../icons/CloseIcon";
import { getTeamState, setTeamMembers } from "../../store/slices/teamSlice";

const MemberIcon = (props) => {
  const dispatch = useDispatch();
  const TeamList = useSelector(getTeamState).teamMembers;

  const RemoveMemberHandler = async () => {
    const updatedTeamList = TeamList.filter((member) => member.id !== props.id);
    await dispatch(setTeamMembers(updatedTeamList));
  };

  return (
    <div className="relative inline-block">
      <img
        className="h-10 w-10 bg-gray-800 rounded-full"
        src={props.avatar}
        alt=""
      />
      {props.isEditTeam && (
        <div className="absolute top-0 right-0 -mt-1 -mr-1">
          <div className="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <button onClick={RemoveMemberHandler}>
              <span className="absolute -inset-1.5" />
              <span className="sr-only">User Icon</span>
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
      <div className="text-xs font-medium text-gray-900 dark:text-white">{props.name}</div>
    </div>
  );
};

export default MemberIcon;
