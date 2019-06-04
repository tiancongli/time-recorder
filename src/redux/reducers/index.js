import { combineReducers } from 'redux';
import block from "./block";
import overlay from "./overlay";
import userSettings from "./userSettings";
import records from "./records";

export default combineReducers({ block, overlay, userSettings, records });
