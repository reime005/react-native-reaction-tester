export const SET_NEW_ROUND = 'SET_NEW_ROUND';
export const SET_NEW_GAME = 'SET_NEW_GAME';

export const SET_START_NEW_ROUND = 'SET_START_NEW_ROUND';

export const SET_ROUND_TIMER_START = 'SET_ROUND_TIMER_START';
export const SET_ROUND_TIMER_END = 'SET_ROUND_TIMER_END';
export const SET_END_TIME_ROUND = 'SET_END_TIME_ROUND';
export const SET_END_CURRENT_ROUND = 'SET_END_CURRENT_ROUND';
export const SET_END_GAME = 'SET_END_GAME';

export function setNewRoundAction() {
  return {
    type: SET_NEW_ROUND,
  }
}

export function setEndGameAction(gameOverInfo) {
  return {
    type: SET_END_GAME,
    gameOverInfo
  }
}

export function setStartNewRoundAction(channel, newRound) {
  return {
    type: SET_START_NEW_ROUND,
    channel,
    newRound
  }
}

export function setEndCurrentRoundAction(currentRound, nowDate) {
  return {
    type: SET_END_CURRENT_ROUND,
    currentRound,
    nowDate
  }
}

export function setRoundTimerStartAction(channel) {
  return {
    type: SET_ROUND_TIMER_START,
    channel
  }
}

export function setRoundTimerEndAction(currentRound) {
  return {
    type: SET_ROUND_TIMER_END,
    currentRound
  }
}

export function setNewGameAction(numbers) {
  return {
    type: SET_NEW_GAME,
    numbers
  }
}
