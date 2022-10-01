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
  FlatList,
} from 'react-native';
import {useNavigate} from 'react-router-native';
import styling from '../styling';

const NewQuestionScreen = (props: {inputStyle?: StyleProp<ViewStyle>}) => {
  let navigate = useNavigate();
  const [subQuestions, setSubQuestions] = useState<string[]>([]);
  const [subQuestionTextValue, setSubQuestionTextValue] = useState<string>('');
  const [titleQuestion, setTitleQuestion] = useState<string>('');
  const [importanceQuestion, setImportanceQuestion] = useState<string>('');

  const styles = StyleSheet.create({
    container: {
      height: '100%',
      flexDirection: 'column',
      backgroundColor: styling.darkPrime,
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
    topBarButtons: {
      color: styling.accent,
      fontWeight: 'bold',
    },
    addSubQuestionButton: {
      color: styling.accent,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    container2: {
      margin: 10,
    },
    title: {
      marginLeft: 20,
      color: styling.white,
    },
    inputStyle: {
      borderRadius: 20,
      backgroundColor: styling.white,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text
          style={styles.topBarButtons}
          onPress={() => {
            navigate('/');
          }}>
          Cancel
        </Text>
        <Text
          onPress={() => {
            navigate('/');
          }}
          style={styles.topBarButtons}>
          Save
        </Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.title}>Title Question</Text>
        <TextInput
          onChangeText={text => setTitleQuestion(text)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Its Importance</Text>
        <TextInput
          onChangeText={text => setImportanceQuestion(text)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Add Sub Question</Text>
        <TextInput
          value={subQuestionTextValue}
          onChangeText={text => setSubQuestionTextValue(text)}
          style={styles.inputStyle}
        />
      </View>
      <Text
        onPress={() => {
          if (subQuestionTextValue != '') {
            setSubQuestions([...subQuestions, subQuestionTextValue]);
            setSubQuestionTextValue('');
          }
        }}
        style={styles.addSubQuestionButton}>
        Add Sub Question
      </Text>
      <FlatList
        data={subQuestions}
        renderItem={({item}) => {
          return <Text>* {item}</Text>;
        }}
      />
    </View>
  );
};
export default NewQuestionScreen;
