import Types from "./types";

const INITIAL_STATE = {
  error: [],
  loading: false,
  user: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.AUTH_USER:
      return { user: action.payload, error: [], loading: false };
    case Types.AUTH_ERROR:
      return { error: [...action.payload], user: false, loading: false };
    case Types.AUTH_CLEAN:
      return { error: [], user: false, loading: false };
    case Types.AUTH_REQUEST:
      return { error: [], user: false, loading: true };
    default:
      return state;
  }
}
