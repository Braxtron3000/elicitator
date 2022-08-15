import React, {useState} from 'react';
import {
  Button,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigate} from 'react-router-native';
import styling from '../styling';

const NewQuestionScreen = (props: {input: StyleProp<ViewStyle>}) => {
  let navigate = useNavigate();
  const [text, onChangeText] = useState('What is your Question??');
  const [reasonText, onChangeReasonText] = useState(
    'Whats the purpose behind this question??',
  );

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      flexDirection: 'column',
      backgroundColor: styling.primary,
    },

    titleQuestion: {
      alignSelf: 'center',
      width: '90%',
      margin: 10,
      borderRadius: 40,
      backgroundColor: styling.darkSecondary,
      fontSize: 15,
    },

    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text
          onPress={() => {
            navigate('/');
          }}>
          Cancel
        </Text>
        <Text>Save</Text>
      </View>
      <TextInput
        numberOfLines={2}
        multiline={true}
        selectTextOnFocus={true}
        onSelectionChange={({
          nativeEvent: {
            selection: {start, end},
          },
        }) => {
          onChangeText('');
          console.log('hamburger');
        }}
        style={[styles.titleQuestion, props.input]}
        value={text}
        onChangeText={onChangeText}
      />
      <TextInput
        numberOfLines={2}
        multiline={true}
        selectTextOnFocus={true}
        onSelectionChange={({
          nativeEvent: {
            selection: {start, end},
          },
        }) => {
          onChangeText('');
          console.log('hamburger');
        }}
        style={[styles.titleQuestion, props.input]}
        value={reasonText}
        onChangeText={onChangeReasonText}
      />
    </View>
  );
};
export default NewQuestionScreen;
