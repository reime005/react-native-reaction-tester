import React from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  connect
} from 'react-redux';

const GameOverContainer = (props) => (
  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
  {
    props.gameOverInfo &&  
    renderInfo(props.gameOverInfo)
  }
  </View>
)

const renderInfo = (gameOverInfo) => {
  return(
    <View style={{
      padding: '10%',
      alignItems: 'center', 
      justifyContent: 'center'
    }}>
      <Text style={{
        padding: 15,
        fontWeight: 'bold',
        fontSize: 30
      }}>Game Over</Text>
      {
        Array.apply(null, {length: gameOverInfo.length})
        .map((el, i) => {
          el = gameOverInfo[i];

          if (el !== 'failed') {
            el = el + "ms";
          }
          return (
            <Text key={i} style={{
              fontWeight: '300',
              fontSize: 20
            }}>Round {i + 1}: {el}</Text>
          )
        })
      }
    </View>
  )
}

export default connect(
  (state) => ({
    gameOverInfo: state.random.gameOverInfo
  }),
  (dispatch) => ({
  })
)(GameOverContainer);