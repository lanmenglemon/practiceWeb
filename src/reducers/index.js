import { combineReducers } from "redux";
import tabsReducer from "./reducer_tabs";

const rootReducer = combineReducers({
  activeTab : tabsReducer
});
export default rootReducer;
