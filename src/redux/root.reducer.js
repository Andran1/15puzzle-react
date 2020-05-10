import { combineReducers } from "redux";

import platformReducer from "../redux/platform/platform.reducer";
const rootReducer = combineReducers({
    platform: platformReducer,
});
 
export default rootReducer;
