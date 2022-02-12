import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import favourite from "./Reducer/CombineRedusers";
import thunk from "redux-thunk"
const store = createStore(favourite, composeWithDevTools(applyMiddleware(thunk)));

export default store;