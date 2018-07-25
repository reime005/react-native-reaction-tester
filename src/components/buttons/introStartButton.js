import React from 'react';
import {
  connect
} from 'react-redux';
import ButtonWrapper from './buttonWrapper';
import { HOME_SCREEN } from '../../constants/routes';

const _IntroStartButton = (props) => (
  <ButtonWrapper title="Got It!" onPress={() => toHomeScreen(props.navigation)}/>
)

const toHomeScreen = (navigation) => (
  navigation.navigate(HOME_SCREEN)
)

export const IntroStartButton = connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(_IntroStartButton);