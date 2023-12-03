import { useEffect, useState } from "react";
import NavBar from "../../Users/components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getTeamList,
  getTeamListState,
  setTeamList,
} from "../../store/slices/teamListSlice";
import MemberIcon from "../components/memberIcon";
import TeamDetailsModal from "../components/TeamDetailsModal";

const TeamHome = () => {
  const dispatch = useDispatch();
  const teamList = useSelector(getTeamListState).teamList;

  useEffect(() => {
    const getTeamsList = async () => {
      const teams = await dispatch(getTeamList());
      await dispatch(setTeamList(teams.payload.teamDetails));
    };
    getTeamsList();
  }, [dispatch]);

  const [selectedTeam, setSelectedTeam] = useState(null);

  const openModal = (team) => {
    setSelectedTeam(team);
  };

  const closeModal = () => {
    setSelectedTeam(null);
  };

  return (
    <div>
      <NavBar />
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Teams
          </h5>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {teamList.map((team, index) => {
              return (
                <div>
                  <li
                    key={index}
                    className="py-3 sm:py-4 bg-slate-200 rounded-xl"
                  >
                    <div className="flex flex-wrap ml-4 justify-between items-center gap-6">
                      <div className="flex flex-wrap gap-4 md:gap-12 p-2">
                        {team.teamMembers.map((member) => {
                          return (
                            <MemberIcon
                              key={member.id}
                              avatar={member.avatar}
                              name={member.first_name}
                            />
                          );
                        })}
                      </div>
                      <button
                        type="button"
                        className="text-white h-fit bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-5"
                        onClick={() => openModal(team)}
                      >
                        View Team
                      </button>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      {selectedTeam && (
        <TeamDetailsModal
          isOpen={true}
          onClose={closeModal}
          teamName={selectedTeam.teamName}
          team={selectedTeam.teamMembers}
        />
      )}
    </div>
  );
};

export default TeamHome;
