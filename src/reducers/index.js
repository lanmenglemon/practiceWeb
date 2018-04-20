import { combineReducers } from "redux";
import ActiveNaviBarItemReducer from "./reducer_active_naviBarItem";
import NaviBarItemsReducer from "./reducer_naviBarItems";

const rootReducer = combineReducers({
  naviBarItems : NaviBarItemsReducer,
  activeNaviBarItem : ActiveNaviBarItemReducer
});
export default rootReducer;
