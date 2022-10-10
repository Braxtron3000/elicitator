import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigate} from 'react-router-native';
import QuestionCard from '../components/card';
import {FAB} from 'react-native-paper';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import styling from '../styling';
import {useDispatch, useSelector} from 'react-redux';
import {deleteAllQuestions} from '../state/questionsListSlice';

const styles = StyleSheet.create({
  container: {
    backgroundColor: styling.darkPrime,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  theRest: {
    flex: 7,
  },

  createNewButton: {
    backgroundColor: styling.accent,
    textAlign: 'center',
    borderRadius: 30,
    // alignSelf: 'center',
    textAlignVertical: 'center',
  },

  textStuff: {
    color: '#FFFFFA',
    textAlign: 'center',
  },

  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
  },
  questionCard: {
    margin: 10,
  },
});

export default function HomeScreen() {
  let navigate = useNavigate();
  const questionList = useSelector((state: any) => state.questions.value);
  const dispatch = useDispatch();

  const [list, setList] = useState<
    {
      time: string;
      title: string;
      subtitle?: string;
    }[]
  >([]);

  return (
    <View style={styles.container}>
      <View style={styles.theRest}>
        <FlatList
          keyExtractor={item => item.time}
          data={questionList}
          extraData={list}
          renderItem={({item}) => {
            return (
              <QuestionCard
                style={{margin: 10, padding: 2, height: 200}}
                title={item.titleQuestion}
                subtitle={item.importanceQuestion}
              />
            );
          }}
        />
      </View>
      <View style={styles.bottomButtons}>
        <FAB
          style={styles.createNewButton}
          onPress={() => {
            navigate('/about');
          }}
          label={'create new'}
          icon={''}
        />
        <FAB
          style={styles.createNewButton}
          onPress={() => {
            dispatch(deleteAllQuestions());
          }}
          label={'delete all'}
          icon={''}
        />
      </View>
    </View>
  );
}
