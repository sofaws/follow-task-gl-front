import tasks from "./tasks.saga";
import users from "./users.saga";
import loadAll from "./load.saga";
import { fork, all } from "redux-saga/effects";

export function createSagaRoot(...sagas) {
  return function* rootSaga() {
    yield all(sagas.map(saga => fork(saga)));
  };
}

export default createSagaRoot(loadAll, tasks, users);
