import * as React from 'react';
import {Text, View} from 'react-native';
import {NativeRouter, Route, Routes} from 'react-router-native';
import HomeScreen from './src/screens/Home';
import CreateNew from './src/screens/CreateNew';
import {Provider} from 'react-redux';
import store from './store';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="about" element={<CreateNew />} />
          </Routes>
        </NativeRouter>
      </Provider>
    );
  }
}
