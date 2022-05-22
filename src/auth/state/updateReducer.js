import Types from "./types";

const INITIAL_STATE = {
  errors: [],
  updating: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_REQUEST:
      return { updating: true, errors: [] };
    case Types.UPDATE_SUCCESS:
      return { errors: [], updating: false };
    case Types.UPDATE_ERROR:
      return { errors: [...action.payload], updating: false };
    case Types.UPDATE_CLEAN:
      return INITIAL_STATE;
    default:
      return state;
  }
};
