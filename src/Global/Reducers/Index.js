import controlBasket from "./Cart";
import controlUser from "./User"
import{getbasketSize,getbaskettotal} from "./Cart"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  controlBasket,
  // getbasketSize,
  // getbaskettotal,
  controlUser
});

export default rootReducer;
