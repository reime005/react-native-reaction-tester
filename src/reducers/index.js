import { combineReducers } from 'redux';

import {
    appLoading,
} from './ui';
import { 
    app,
    nav,
} from './app';
import { 
} from './domain';
import { 
    random,
} from './random';


export default combineReducers({
    ui: combineReducers({
        appLoading,
    }),
    app,
    nav,
    random
});