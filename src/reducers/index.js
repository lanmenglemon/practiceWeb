import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import tabsReducer from "./reducer_tabs";

const rootReducer = combineReducers({
  activeTab : tabsReducer,
  form : formReducer
});
export default rootReducer;
