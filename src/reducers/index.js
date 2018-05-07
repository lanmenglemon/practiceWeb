import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import SendEmailReducer from "./reducer_sendEmail";
import ImagesReducer from "./reducer_images";
import ActiveImage from "./reducer_active_image";

const rootReducer = combineReducers({
  form : formReducer,
  email : SendEmailReducer,
  images: ImagesReducer,
  activeImage: ActiveImage
});
export default rootReducer;
