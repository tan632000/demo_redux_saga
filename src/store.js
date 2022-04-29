import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/user";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const checkStateMiddleware = (store) => (next) => (action) => {
  console.log("will dispatch", action);
  const returnValue = next(action);
  console.log("state after dispatch", store.getState());
  return returnValue;
};

const store = createStore(
  reducer,
  applyMiddleware(checkStateMiddleware, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
