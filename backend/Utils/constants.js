module.exports = {
  // 2XX status

  LOGIN_SUCCESS: {
    status: 200,
    message: "Logged in successfully",
  },

  LOAD_SUCCESS: {
    status: 200,
    message: "Loaded successfully",
  },

  UPDATE_SUCCESS: {
    status: 200,
    message: "Updated successfully",
  },

  FETCH_SUCCESS: {
    status: 200,
    message: "Fetched successfully",
  },

  DELETE_SUCCESS: {
    status: 200,
    message: "User deleted successfully",
  },

  REGISTER_SUCCESS: {
    status: 201,
    message: "Registered successfully",
  },

  CREATED_SUCCESS: {
    status: 201,
    message: "Created successfully",
  },

  NO_CONTENT: {
    status: 204,
    message: "No content available",
  },

  //4XX status

  EMAIL_ALREADY_EXIST: {
    status: 400,
    message: "Email is already taken",
  },

  UNAUTHORIZED: {
    status: 401,
    message: "Invalid credentials",
  },

  FORBIDDEN: {
    status: 403,
    message: "Unauthorized",
  },

  NOT_FOUND: {
    status: 404,
    message: "Sorry! Not found",
  },

  //5XX status

  ERROR_UNKNOWN: {
    status: 500,
    message: "Something went wrong!",
  },
};
