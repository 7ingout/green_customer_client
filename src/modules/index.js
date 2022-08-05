import { combineReducers } from "redux";
import customers from './customers';
import logincheck from "./logincheck";

const rootReducer = combineReducers({ customers, logincheck });
export default rootReducer;