import * as types from '../../actions/random/reducerActions';

import initialState from './initialState';
import colors from './colors';

export const random = (state, action) => {
    let nextState = state || initialState;

    switch (action.type) {
        case types.SET_NEW_GAME: {
            const {
                numbers,
                 
            } = action;

            if (!numbers) {
                break;
            }

            nextState = {
                ...initialState,
                numbers
            }
        }
        break;
        case types.SET_START_NEW_ROUND: {
            const { 
                channel,
                newRound
            } = action;

            nextState = {
                ...nextState,
                channel,
                currentColor: colors.RED,
                currentRound: newRound
            }
        }
        break;
        case types.SET_ROUND_TIMER_END: {
            const { 
                currentRound
            } = action;

            let {
                roundStartTimes
            } = nextState;

            roundStartTimes[currentRound] = new Date();

            nextState = {
                ...nextState,
                channel: initialState.channel,
                currentColor: colors.GREEN,
                roundStartTimes
            }
        }
        break;
        case types.SET_ROUND_TIMER_START: {
            nextState = {
                ...nextState,
                channel: action.channel,
                currentColor: colors.RED
            }
        }
        break;
        case types.SET_INVALID_ROUND: {
            const {
                channel
            } = nextState;

            if (channel && channel.close) {
                channel.close();
            }

            nextState = {
                ...nextState,
                channel: undefined
            }
        }
        break;
        case types.SET_END_GAME: {
            nextState = {
                ...nextState,
                gameOverInfo: action.gameOverInfo,
                currentColor: colors.NONE
            }
        }
        break;
        case types.SET_END_CURRENT_ROUND: {
            const { 
                currentRound,
                nowDate
            } = action;

            let {
                roundEndTimes
            } = nextState;

            roundEndTimes[currentRound] = nowDate;

            nextState = {
                ...nextState,
                roundEndTimes,
                channel: initialState.channel,
            }
        }
        break;
    }

    return nextState;
};

export default random;
