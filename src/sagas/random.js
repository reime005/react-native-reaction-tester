import { eventChannel } from "redux-saga";
import { call, put, select, take } from "redux-saga/effects";

import axios from 'axios';
import * as selectors from './selectors';
import { 
  setNewGameAction, 
  setStartNewRoundAction,
  setEndCurrentRoundAction, 
  setRoundTimerEndAction, 
  setRoundTimerStartAction,
  setEndGameAction
} from "../actions";
import colors from "../reducers/random/colors";

export function* newRound() {
  // check if game over --> game info calc + set + color none
  let currentRound = yield select(selectors.getCurrentRound);
  const numbers = yield select(selectors.getNumbers);
  
  if (currentRound + 2 >= numbers.length - 1) {
    yield call(endCurrentRound, currentRound);
    yield call(triggerGameEnd);
    return;
  }

  // first end current round, then start new round
  if (currentRound >= 0) {
    yield call(endCurrentRound, currentRound);
  }

  currentRound++;

  if (currentRound + 1 < numbers.length - 1) { 
    currentRound = yield call(startNewRound, currentRound, numbers[currentRound]);
  }

  // round start red (listener) --> round end green
}

function* triggerGameEnd() {
  const currentColor = yield select(selectors.getCurrentColor);
  if (currentColor !== colors.NONE) {
    const roundEndTimes = yield select(selectors.getRoundEndTimes);
    const roundStartTimes = yield select(selectors.getRoundStartTimes);
    let gameOverInfo = [];

    roundEndTimes.forEach((el, index) => {
      if (typeof el === 'undefined') {
        gameOverInfo[index] = 'failed';
      } else {
        gameOverInfo[index] = el.getTime() - roundStartTimes[index].getTime();
      }
    })

    yield put(setEndGameAction(gameOverInfo));
  }
}

function* startNewRound(currentRound, seconds) {
  const channel = yield call(createIntervalChannel, 
    0.25);

  yield put(setStartNewRoundAction(channel, currentRound));

  yield take(channel);

  yield put(setRoundTimerEndAction(currentRound));
}

function* endCurrentRound(currentRound) {
  const channel = yield select(selectors.getChannel);

  if (typeof channel === 'undefined') {
    // "timer" is not there
    yield put(setEndCurrentRoundAction(currentRound, new Date()));
  } else {
    yield put(setEndCurrentRoundAction(currentRound, undefined));
  }
}

function createIntervalChannel(seconds) {
  return eventChannel(emit => {
    // subscriber
    const id = setInterval(
      () => emit(seconds), seconds * 1000
    );

    // unsubscriber
    return () => {
      clearInterval(id);
    }
  })
}

export function* newGame() {
  const numbers = yield call(axios.get, 'https://www.random.org/integers/', {
    params: {
      num: 2,
      min: 3,
      max: 6,
      col: 1,
      base: 10,
      format: 'plain',
      rnd: 'new'
    }
  });

  yield put(setNewGameAction(numbers.data || []));
  yield call(newRound);
}