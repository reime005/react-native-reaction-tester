import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import {
  connect
} from 'react-redux';
import { HOME_SCREEN } from '../../constants/routes';

const _IntroContainer = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>IntroContainer</Text>

    <Button
      title="Go to Home"
      onPress={() => props.navigation.navigate(HOME_SCREEN)}
    />
  </View>
)

export const IntroContainer = connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(_IntroContainer);

