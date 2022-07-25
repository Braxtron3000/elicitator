import * as React from 'react';
import {Text, View} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import HomeScreen from './src/screens/Home';
import About from './src/screens/About';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <NativeRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="about" element={<About />} />
        </Routes>
      </NativeRouter>
    );
  }
}
