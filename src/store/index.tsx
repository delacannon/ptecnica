import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { appReducer } from "./reducers";
import { loadFromLocalStorage, saveToLocalStorage } from "./utils";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ appReducer });

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

store.subscribe(() => saveToLocalStorage(store.getState()));
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
