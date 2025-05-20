import { createStore, combineReducers } from "redux";
import pricingReducer from "./reducers/pricing-reducer";

const rootReducer = combineReducers({
  plan: pricingReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
