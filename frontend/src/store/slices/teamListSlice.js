import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios/axiosConfig";
import { FETCH_SUCCESS } from "../../Utils/constants";

const initialState = {
  teamList: [],
};

const teamListSlice = createSlice({
  name: "teamList",
  initialState: initialState,
  reducers: {
    setTeamList(state, action) {
      state.teamList = action.payload;
    },
  },
});

export const getTeamList = createAsyncThunk(
  "teamList/getTeamList",
  async (id) => {
    try {
      const response = await axios.get(`/team/${id}`);
      if (
        response?.status === FETCH_SUCCESS.status &&
        response?.data.message === FETCH_SUCCESS.message
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

export const { setTeamList } = teamListSlice.actions;

export const getTeamListState = (state) => state.teamList;

export const teamListReducer = teamListSlice.reducer;
