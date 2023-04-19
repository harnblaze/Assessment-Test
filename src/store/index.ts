import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { chartsReducer } from "./reducers/chartReducer";

const rootReducer = combineReducers({
  charts: chartsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
