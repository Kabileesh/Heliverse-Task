import CloseIcon from "../../Team/icons/CloseIcon";

const UserDetailsCard = (props) => {
  const { isOpen, onClose } = props;

  return (
    <div>
      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          isOpen ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative p-4 w-fit max-h-full">
          <div className="relative bg-gray-600 rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-6 md:p-7 border-b rounded-t dark:border-gray-600">
              <div className="flex items-center space-x-12">
                <img
                  className="w-12 h-12 bg-white rounded-full"
                  src={props.user.avatar}
                  alt=""
                />
                <div className="space-y-3">
                  <div className="flex felx-row justify-between gap-20">
                    <div>
                      <h3 className="text-xl font-semibold text-white dark:text-white">
                        {props.user.first_name} {props.user.last_name}
                      </h3>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="text-gray-400 bg-white hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        data-modal-hide="default-modal"
                        onClick={onClose}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-white dark:text-gray-400">
                    Email: {props.user.email}
                  </p>
                  <p className="text-sm text-white dark:text-gray-400">
                    Domain: {props.user.domain}
                  </p>
                  <p className="text-sm text-white dark:text-gray-400">
                    Gender: {props.user.gender}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsCard;
