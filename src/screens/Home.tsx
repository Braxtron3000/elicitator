import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigate} from 'react-router-native';

const HomeScreen = () => {
  let navigate = useNavigate();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="to about"
        onPress={() => {
          navigate('about');
        }}
      />
    </View>
  );
};
export default HomeScreen;
