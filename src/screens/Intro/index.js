import React, { Component } from 'react';
import {
  IntroContainer
} from '../../components';

export class IntroScreen extends Component {
  render() {
    return (
      <IntroContainer navigation={this.props.navigation}/>
    );
  }
}

export default IntroScreen;
