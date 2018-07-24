import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    StackNavigator,
} from 'react-navigation';

import * as Routes from '../../constants/routes';

import { AppLoadingScreen } from '../app/AppLoadingScreen';
import { IntroScreen, HomeScreen } from '../../screens';

export const RootNavigator = StackNavigator({
    [Routes.APP_LOADING_SCREEN]: { screen: AppLoadingScreen },
    [Routes.INTRO_SCREEN]: { screen: IntroScreen },
    [Routes.HOME_SCREEN]: { screen: HomeScreen },
}, {
    headerMode: 'none',
});

export default RootNavigator;
