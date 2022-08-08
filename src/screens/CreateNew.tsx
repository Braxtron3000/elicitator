import React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigate} from 'react-router-native';

const About = () => {
  let navigate = useNavigate();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      paddingHorizontal: 10,
    },

    theRest: {
      flex: 30,
      // backgroundColor: 'yellow',
    },

    createNewButton: {
      padding: 10,
      flex: 1,
      // backgroundColor: '#702632',
      width: 100,
      borderRadius: 30,
    },

    textStuff: {
      position: 'absolute',
      top: 100,
      color: '#912F40',
      textAlign: 'center',
    },
  });

  return (
    <View>
      <Text>About Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigate('/');
        }}>
        <Text style={styles.textStuff}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};
export default About;
