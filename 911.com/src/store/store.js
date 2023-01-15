import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as Authreducer } from "./Authreducer/reducer";
import { reducer as Appreducer } from "./Appreducer/reducer";
const rootreducer = combineReducers({
  Authreducer,
  Appreducer,
});

const store = legacy_createStore(rootreducer, applyMiddleware(thunk));

export { store };
