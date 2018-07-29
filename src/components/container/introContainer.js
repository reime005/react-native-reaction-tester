import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  connect
} from 'react-redux';
import Swiper from 'react-native-swiper';
import { IntroStartButton } from '../buttons';
import colors from '../../reducers/random/colors';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  textH1: {
    textAlign: 'center',
    color: '#303030',
    fontSize: 40,
    fontWeight: 'bold',
  }
})

const slide = (color) => ({
  flex: 1,
  paddingTop: '30%',
  paddingLeft: '10%',
  paddingRight: '10%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color
})

const text = (color) => ({
  color: color,
  fontSize: 30,
  paddingTop: 20,
  fontWeight: 'bold',
  textAlign: 'center',
})

const IconView = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Ionicons
      size={150}
      name='ios-finger-print'
      type='ionicon'
      color='#517fa4'
    />
  </View>
)

const _IntroContainer = (props) => (
    <Swiper showsButtons={true}>
      <View style={slide(colors.NONE)}>
        <Text style={styles.textH1}>Reaction Time Tester</Text>
        <Text style={text('#4d4d4d')}>Test your reaction in 5 steps!</Text>
        <IconView/>
      </View>
      <View style={slide(colors.RED)}>
        <Text style={text('white')}>Don't click!</Text>
      </View>
      <View style={slide(colors.GREEN)}>
        <Text style={text('#4d4d4d')}>Click!</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <IntroStartButton {...props}/>
        </View>
      </View>
    </Swiper>
)

export const IntroContainer = connect(
  (state) => ({
  }),
  (dispatch) => ({
  })
)(_IntroContainer);
