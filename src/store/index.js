import { applyMiddleware, createStore } from "redux"
import { rootSaga } from "./saga"
import logReducer from './reducer'
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(logReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)