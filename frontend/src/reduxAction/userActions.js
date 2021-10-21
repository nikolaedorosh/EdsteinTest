import * as TYPES from "../reduxTypes/types";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.USER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:3000/api/user/login",
      { email, password },
      config
    );

    dispatch({ type: TYPES.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TYPES.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: TYPES.USER_LOGOUT });
};

export const register = (name, email, password, pic) => async (dispatch) => {
  try {
    dispatch({ type: TYPES.USER_REGISTER_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:3000/api/user/register",
      { name, pic, email, password },
      config
    );

    dispatch({ type: TYPES.USER_REGISTER_SUCCESS, payload: data });

    dispatch({ type: TYPES.USER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TYPES.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const updateProfile = (user) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: TYPES.USER_UPDATE_REQUEST });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.post("/api/users/profile", user, config);

//     dispatch({ type: TYPES.USER_UPDATE_SUCCESS, payload: data });

//     dispatch({ type: TYPES.USER_LOGIN_SUCCESS, payload: data });

//     localStorage.setItem("userInfo", JSON.stringify(data));
//   } catch (error) {
//     dispatch({
//       type: TYPES.USER_UPDATE_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
