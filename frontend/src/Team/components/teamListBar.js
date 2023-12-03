import { useDispatch, useSelector } from "react-redux";
import {
  createTeam,
  getTeamState,
  setTeamName,
} from "../../store/slices/teamSlice";
import MemberIcon from "./memberIcon";
import { ToastContainer, toast } from "react-toastify";
import { toastConfig } from "../../Utils/constants";
import "react-toastify/dist/ReactToastify.css";

const TeamListBar = () => {
  const teamDetails = useSelector(getTeamState);
  const teamMembers = teamDetails.teamMembers;
  const teamName = teamDetails.teamName;

  const dispatch = useDispatch();

  const TeamNameHandler = async (e) => {
    await dispatch(setTeamName(e.target.value));
  };

  const CreateTeamHandler = async () => {
    if (teamMembers.length > 1) {
      if (!teamName) {
        toast.warning("Enter Team Name !", toastConfig);
      } else {
        const teamInfo = { teamName, teamMembers };
        const createdTeam = await dispatch(createTeam(teamInfo));
        if (createdTeam) {
          toast.success("Team Created Successfully", toastConfig);
        }
      }
    } else {
      toast.warning("Team should have minimum of 2 members", toastConfig);
    }
  };

  return (
    <div className="mb-5 p-2 w-full bg-slate-200 rounded-full">
      {teamMembers && teamMembers.length === 0 ? (
        <div className="ml-4">Create your Team now !</div>
      ) : (
        <div className="flex flex-wrap ml-4 justify-between">
          <div className="flex flex-wrap gap-5 p-2">
            {teamMembers.map((member) => (
              <MemberIcon
                key={member.id}
                avatar={member.avatar}
                id={member.id}
                name={member.first_name}
                isEditTeam={true}
              />
            ))}
          </div>
          <div className="flex flex-wrap">
            <div className="flex items-center mr-4">
              <input
                className="bg-gray-50 border border-gray-300 font-medium text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Team Name"
                required
                onChange={TeamNameHandler}
              />
            </div>
            <div className="flex items-center">
              <button
                type="button"
                className="text-white h-fit bg-[#050708] hover:bg-[#050708]/80 focus:ring-2 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-2xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-4"
                onClick={CreateTeamHandler}
              >
                Create Team
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default TeamListBar;
