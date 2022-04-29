import { put, takeEvery } from "redux-saga/effects";
import {
  loadUsersSuccess,
  LOAD_USERS_ERROR,
  LOAD_USERS_LOADING,
  LOAD_USERS_SUCCESS,
} from "../constants";
import Api from "../api";
import { wait } from "@testing-library/user-event/dist/utils";

async function fetchAsync(func) {
  const response = await func();
  if (response.ok) {
    return await response.json();
  }
}

function* fetchUser() {
  try {
    const users = yield fetchAsync(Api.getUsers);
    yield wait(3000);
    yield put({ type: LOAD_USERS_SUCCESS, data: users });
  } catch (e) {
    yield put({ type: LOAD_USERS_ERROR, error: e.message });
  }
}

export function* usersSaga() {
  yield takeEvery(LOAD_USERS_LOADING, fetchUser);
}

export default usersSaga;
