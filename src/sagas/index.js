import { fork, takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
    LOAD_APP_RESOURCES,
    TRIGGER_NEW_GAME,
    TRIGGER_NEW_ROUND
} from '../actions';

import {
    handleAppLoading,
} from './app_loading';

import {
    newRound,
    newGame,
} from './random';

const root = function* root() {
    yield all([
        takeLatest(LOAD_APP_RESOURCES, handleAppLoading),
        takeLatest(TRIGGER_NEW_ROUND, newRound),
        takeLatest(TRIGGER_NEW_GAME, newGame),
    ]);
}

export default root;