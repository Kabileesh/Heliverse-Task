import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/axiosConfig";
import { CREATED_SUCCESS } from "../../Utils/constants";

const initialState = {
  teamName: null,
  teamMembers: [],
};

const teamSlice = createSlice({
  name: "team",
  initialState: initialState,
  reducers: {
    setTeamMembers(state, action) {
      state.teamMembers = action.payload;
    },
    setTeamName(state, action) {
      state.teamName = action.payload;
    },
  },
});

export const createTeam = createAsyncThunk(
  "team/createUser",
  async (teamInfo) => {
    try {
      console.log(teamInfo);
      const response = await axios.post("/team", teamInfo);
      if (
        response.status === CREATED_SUCCESS.status &&
        response.data.message === CREATED_SUCCESS.message
      ) {
        return response?.data;
      }
    } catch (err) {
      const error = err;
      error.message = err.response.data?.message;
      throw error;
    }
  }
);

export const { setTeamMembers, setTeamName } = teamSlice.actions;

export const getTeamState = (state) => state.team;

export const teamReducer = teamSlice.reducer;
