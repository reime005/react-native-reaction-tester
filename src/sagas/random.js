import { eventChannel } from "redux-saga";
import { call, put, select, take } from "redux-saga/effects";

import axios from 'axios';
import * as selectors from './selectors';
import { 
  setNewGameAction, 
  setStartNewRoundAction,
  setEndCurrentRoundAction, 
  setRoundTimerEndAction, 
  setEndGameAction,
  setInvalidRoundAction
} from "../actions";
import colors from "../reducers/random/colors";

export function* newRound() {
  let currentRound = yield select(selectors.getCurrentRound);
  const numbers = yield select(selectors.getNumbers);

  // check if round end is valid, else currentRound will be decremented
  if (currentRound >= 0) {
    currentRound = yield call(endCurrentRound, currentRound);
  } 

  currentRound++;

  if (currentRound < numbers.length) { 
    // if there are new rounds left, start timer and change color
    yield call(startNewRound, currentRound, numbers[currentRound]);
  } else {
    // game over
    yield call(triggerGameEnd);
  }
}

function* triggerGameEnd() {
  // change color and calc game end time info
  const currentColor = yield select(selectors.getCurrentColor);
  if (currentColor !== colors.NONE) {
    const roundEndTimes = yield select(selectors.getRoundEndTimes);
    const roundStartTimes = yield select(selectors.getRoundStartTimes);
    let gameOverInfo = [];

    roundEndTimes.forEach((el, index) => {
      if (typeof el === 'undefined' || 
        typeof roundStartTimes[index] === 'undefined') {
        // to be used if rounds can be invalid
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
    seconds);
  
  yield put(setStartNewRoundAction(channel, currentRound));

  yield take(channel);

  yield put(setRoundTimerEndAction(currentRound));
}

function* endCurrentRound(currentRound) {
  const channel = yield select(selectors.getChannel);

  if (typeof channel === 'undefined') {
    // if "timer" is not there
    yield put(setEndCurrentRoundAction(currentRound, new Date()));
    return currentRound;
  } else {
    yield put(setInvalidRoundAction())
    console.log("teds");
    return currentRound - 1;
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
  const _numbers = yield call(axios.get, 'https://www.random.org/integers/', {
    params: {
      num: 5,
      min: 1,
      max: 6,
      col: 1,
      base: 10,
      format: 'plain',
      rnd: 'new'
    }
  });

  let numbers = _numbers.data ? _numbers.data
    .substring(0, _numbers.data.length - 1)
    .split('\n')
  : [];

  yield put(setNewGameAction(numbers));
  yield call(newRound);
}
