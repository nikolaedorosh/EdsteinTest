import * as TYPES from "../reduxTypes/types";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN_REQUEST:
      return { loading: true };
    case TYPES.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case TYPES.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case TYPES.USER_LOGOUT:
      return {};

    case TYPES.USER_REGISTER_REQUEST:
      return { loading: true };
    case TYPES.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case TYPES.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
