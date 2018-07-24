import React from 'react';
import {
  connect
} from 'react-redux';
import ButtonWrapper from './buttonWrapper';
import { triggerNewGameSagaAction } from '../../actions';

const NewGameButton = (props) => (
  <ButtonWrapper title="NewGameButton" onPress={props.newGame}/>
)

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    newGame: () => dispatch(triggerNewGameSagaAction())
  })
)(NewGameButton);