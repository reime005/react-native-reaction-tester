import React, { Component } from 'react';

import { Platform, Button, View, Text } from 'react-native';
import { HOME_SCREEN } from '../../constants/routes';

export class IntroScreen extends Component {
  static navigationOptions = {
      title: 'Intro',
    };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>this is a IntroScreen screen</Text>
        <Text>${Platform.OS}</Text>
        <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate(HOME_SCREEN)}
        />
      </View>
    );
  }
}

export default IntroScreen;
