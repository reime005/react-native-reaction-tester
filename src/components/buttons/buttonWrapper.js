import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const ButtonWrapper = (props) => (
  <TouchableOpacity 
    {...props}
    style={{
      backgroundColor: "rgba(91, 85, 216, 0.75)",
      width: 'auto',
      minWidth: 300,
      height: 45,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: "transparent",
      borderWidth: 0,
      borderRadius: 4
    }}
  >
    <Text style={{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20
    }}>{props.title}</Text>
  </TouchableOpacity>
)

export default ButtonWrapper;