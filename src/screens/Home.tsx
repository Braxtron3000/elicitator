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

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  theRest: {
    flex: 7,
    backgroundColor: 'yellow',
  },

  createNewButton: {
    padding: 10,
    flex: 1,
    maxHeight: 50,
    backgroundColor: '#702632',
    width: 170,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 30,
    // alignSelf: 'center',
    height: 10,
  },

  textStuff: {
    color: '#FFFFFA',
    textAlign: 'center',
  },
});

export default function HomeScreen() {
  const [list, setList] = useState<
    {
      title: string;
      subtitle?: string;
    }[]
  >([
    {
      title: 'cowabunga',
    },
    {title: 'hamburger?'},
  ]);

  // let navigate = useNavigate();

  // const set

  // setList([
  //   {
  //     title: 'cowabunga?',
  //   },
  // ]);
  return (
    <View style={styles.container}>
      <View style={styles.theRest}>
        <FlatList
          keyExtractor={item => item.title}
          data={list}
          renderItem={({item}) => {
            return <QuestionCard title={item.title} subtitle={item.subtitle} />;
          }}
        />
        {/* <View style={{backgroundColor: 'blue', width: 20, flex: 4}}> */}
      </View>
      <FAB
        style={styles.createNewButton}
        onPress={() => {
          let titles = list;
          titles.push({
            title: 'in a year?',
          });
          setList(titles);
          // navigate('about');
        }}
        label={'create new'}
        icon={''}
      />
    </View>
  );
}
// export default HomeScreen;
