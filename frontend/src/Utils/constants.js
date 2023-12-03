import { toast } from "react-toastify";

export const PASSWORD_MESSAGE =
  "Password must be minimum 8 characters, with at least a symbol, upper and lower case letters and a number";

export const PASSWORD_REGEX =
  /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const CONFIRM_PASSWORD = "Confirmed password must be same as password";

export const LOADING = "loading";

export const SUCCEEDED = "succeeded";

export const IDLE = "idle";

export const FAILED = "failed";

export const toastConfig = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 1500,
  theme: "dark",
  className: "text-xs",
};

// 2XX

export const FETCH_SUCCESS = {
  status: 200,
  message: "Fetched successfully",
};

export const LOAD_SUCCESS = {
  status: 200,
  message: "Loaded successfully",
};

export const LOGIN_SUCCESS = {
  status: 200,
  message: "Logged in successfully",
};

export const DELETE_SUCCESS = {
  status: 200,
  message: "User deleted successfully",
};

export const CREATED_SUCCESS = {
  status: 201,
  message: "Created successfully",
};

export const REGISTER_SUCCESS = {
  status: 201,
  message: "Registered successfully",
};

export const NO_CONTENT = {
  status: 204,
  message: "No content available",
};

//4XX

export const STANDARD_ERROR = {
  status: 400,
};

export const UNAUTHORIZED = {
  status: 401,
  message: "Invalid credentials",
};

export const FORBIDDEN = {
  status: 403,
  message: "Unauthorized",
};

export const ERROR_UNKNOWN = {
  status: 500,
  message: "Something went wrong!",
};
