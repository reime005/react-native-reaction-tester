import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import  HomeContainer from '../../components/container/homeContainer';

export class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Header',
  };

  render() {
    return (
      <HomeContainer/>
    );
  }
}

export default HomeScreen;
