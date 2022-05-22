import Types from "./types";

const INITIAL_STATE = {
    open: false,
    title: "Success",
    time: 3000
}

const reducer = (state= {INITIAL_STATE} , action) => {
  switch (action.type) {
    case Types.SWA_SUCCESS_OPEN:
        return { open: true, ...action.payload }
    case Types.SWA_CLOSE:
        return { open: false }
    default:
      return state;
  }
};

export default reducer;
