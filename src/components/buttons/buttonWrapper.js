import React from 'react';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonWrapper = (props) => (
  <Button 
    {...props}
    icon={
      <Icon
        name='arrow-right'
        size={15}
        color='white'
      />
    }
    titleStyle={{ fontWeight: "700" }}
    buttonStyle={{
      backgroundColor: "rgba(91, 85,216, 0.75)",
      width: 'auto',
      minWidth: 300,
      height: 45,
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 4
    }}
    containerStyle={{ marginTop: 20 }}
  />
)

export default ButtonWrapper;