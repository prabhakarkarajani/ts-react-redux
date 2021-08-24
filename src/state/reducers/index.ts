import { combineReducers } from "redux";
import respositoriesRedcuer from "./repositoriesReducer";

const reducers = combineReducers({
  respositories: respositoriesRedcuer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
