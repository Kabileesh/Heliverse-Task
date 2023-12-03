import CloseIcon from "../icons/CloseIcon";

const TeamDetailsModal = (props) => {
  const { isOpen, onClose } = props;

  return (
    <div
      tabIndex="-1"
      aria-hidden="true"
      className={`${
        isOpen ? "flex" : "hidden"
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
    >
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-slate-400 rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-white dark:text-white">
              {props.teamName}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent rounded-lg text-sm ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4 bg-green-100">
            <div className="flow-root mb-2">
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {props.team.map((member, index) => {
                  return (
                    <li key={index} className="py-3 sm:py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="w-8 h-8 rounded-full"
                            src={member.avatar}
                            alt=""
                          />
                        </div>

                        <div className="flex-1 min-w-0 ms-4">
                          <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {member.first_name} {member.last_name}
                          </p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {member.email}
                          </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                          {member.domain}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetailsModal;
