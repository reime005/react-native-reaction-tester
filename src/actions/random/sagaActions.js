export const TRIGGER_NEW_ROUND = 'TRIGGER_NEW_ROUND';
export const TRIGGER_NEW_GAME = 'TRIGGER_NEW_GAME';

export function triggerNewRoundSagaAction() {
  return {
    type: TRIGGER_NEW_ROUND,
  }
}

export function triggerNewGameSagaAction() {
  return {
    type: TRIGGER_NEW_GAME,
  }
}
