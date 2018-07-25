import React from 'react';
import {
  connect
} from 'react-redux';
import ButtonWrapper from './buttonWrapper';
import { triggerNewRoundSagaAction } from '../../actions';

const NewRoundButton = (props) => (
  <ButtonWrapper title="Click" onPress={props.newRound}/>
)

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    newRound: () => dispatch(triggerNewRoundSagaAction())  
  })
)(NewRoundButton);