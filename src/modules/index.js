import { combineReducers } from "redux";
import customers from './customers';
import logincheck from "./logincheck";
import gallery from "./gallery";

const rootReducer = combineReducers({ customers, logincheck, gallery });
export default rootReducer;