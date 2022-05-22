import { reducer as formReducer } from "redux-form";
import AuthReducer from "../../auth/state/reducer";
import swaReducer from "../../app/Admin/state/swaRedducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  form: formReducer,
  auth: AuthReducer,
  SWA: swaReducer,
};
