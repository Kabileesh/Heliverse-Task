import { configureStore } from "@reduxjs/toolkit";
import { userListReducer } from "./slices/userListSlice";
import { teamReducer } from "./slices/teamSlice";
import { teamListReducer } from "./slices/teamListSlice";

const store = configureStore({
  reducer: {
    userList: userListReducer,
    team: teamReducer,
    teamList: teamListReducer,
  },
});

export default store;
