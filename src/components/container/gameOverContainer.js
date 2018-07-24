import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  connect
} from 'react-redux';

const GameOverContainer = (props) => (
  <View>
  {
    props.gameOverInfo &&  <Text>Game Over</Text> && 
    renderInfo(props.gameOverInfo)
  }
  </View>
)

const renderInfo = (gameOverInfo) => {
  return(
    Array.apply(null, {length: gameOverInfo.length})
    .map((el, i) => {
      el = gameOverInfo[i];

      if (el !== 'failed') {
        el = el + "ms";
      }
      return (
        <Text>Round {i + 1}: {el}</Text>
      )
    })
  )
}

export default connect(
  (state) => ({
    gameOverInfo: state.random.gameOverInfo
  }),
  (dispatch) => ({
  })
)(GameOverContainer);