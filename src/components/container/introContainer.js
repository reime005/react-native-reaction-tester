import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import {
  connect
} from 'react-redux';
import { HOME_SCREEN } from '../../constants/routes';
import Swiper from 'react-native-swiper';
import { IntroStartButton } from '../buttons';
import colors from '../../reducers/random/colors';

const styles = StyleSheet.create({
  wrapper: {
  },
  text: {
    color: '#303030',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textH1: {
    color: '#0b0d0f',
    fontSize: 50,
    fontWeight: 'bold',
  }
})

const slide = (color) => ({
    flex: 1,
    paddingTop: '30%',
    paddingLeft: '10%',
    paddingRight: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color
})

const _IntroContainer = (props) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={slide(colors.NONE)}>
        <Text style={styles.textH1}>Welcome</Text>
        <Text style={styles.text}>Reaction Time Tester</Text>
      </View>
      <View style={slide(colors.RED)}>
        <Text style={styles.text}>Don't click!</Text>
      </View>
      <View style={slide(colors.GREEN)}>
        <Text style={styles.text}>Click!</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <IntroStartButton {...props}/>
        </View>
      </View>
    </Swiper>
  </View>
)

export const IntroContainer = connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(_IntroContainer);
