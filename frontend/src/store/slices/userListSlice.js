import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axiosConfig";
import { DELETE_SUCCESS, FETCH_SUCCESS } from "../../Utils/constants";

const initialState = {
  userList: [],
  pageNumber: 1,
  pageCount: 1,
  nameFilter: "",
  filterData: {
    domain: null,
    gender: null,
    available: null,
  },
};

const userListSlice = createSlice({
  name: "userList",
  initialState: initialState,
  reducers: {
    setUserList(state, action) {
      state.userList = action.payload.filteredUser;
      state.pageNumber = action.payload.pageNumber;
      state.pageCount = action.payload.pageCount;
    },
    updateUserList(state, action) {
      state.userList = action.payload;
    },
    updatePageNumber(state, action) {
      state.pageNumber = action.payload;
    },
    updateNameFilter(state, action) {
      state.nameFilter = action.payload;
    },
    updateFilterDataDomain(state, action) {
      state.filterData.domain = action.payload;
    },
    updateFilterDataGender(state, action) {
      state.filterData.gender = action.payload;
    },
    updateFilterAvailableFilter(state, action) {
      state.filterData.available = action.payload;
    },
  },
});

export const getUserList = createAsyncThunk(
  "userList/getUserList",
  async ({ page, filterData }) => {
    try {
      const response = await axios.get("/users", {
        params: { page, filterData },
      });
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

export const getDomainList = createAsyncThunk(
  "userList/getDomainList",
  async () => {
    try {
      const response = await axios.get("/domain-list", { params: {} });
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

export const deleteUser = createAsyncThunk(
  "userList/deleteUser",
  async (id) => {
    try {
      const response = await axios.delete(`/users/${id}`);
      if (
        response?.status === DELETE_SUCCESS.status &&
        response?.data.message === DELETE_SUCCESS.message
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

export const {
  setUserList,
  updateUserList,
  updatePageNumber,
  updateNameFilter,
  updateFilterDataDomain,
  updateFilterDataGender,
  updateFilterAvailableFilter,
} = userListSlice.actions;

export const getUserListState = (state) => state.userList;

export const userListReducer = userListSlice.reducer;
