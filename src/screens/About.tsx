import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigate} from 'react-router-native';

const About = () => {
  let navigate = useNavigate();

  return (
    <View>
      <Text>About Screen</Text>
      <Button
        title="to home"
        onPress={() => {
          navigate('/');
        }}
      />
    </View>
  );
};
export default About;
