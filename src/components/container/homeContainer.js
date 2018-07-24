import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  connect
} from 'react-redux';
import NewGameButton from '../buttons/newGameButton';
import NewRoundButton from '../buttons/newRoundButton';
import GameOverContainer from './gameOverContainer';
import colors from '../../reducers/random/colors';

const HomeContainer = (props) => (
  <View style={{ 
    flex: 1, 
    backgroundColor: props.currentColor,
    propsalignItems: 'center',
    justifyContent: 'center'
  }}>
  {
    props.currentColor === colors.NONE ?
    <View>
      <NewGameButton/>
      <GameOverContainer/>
    </View>
    :

    <View>
      <NewRoundButton/>
    </View>
  }
  </View>
)

export default connect(
  (state) => ({
    currentColor: state.random.currentColor,
    numbers: state.random.numbers,
    currentRound: state.random.currentRound
  }),
  (dispatch) => ({
  })
)(HomeContainer);