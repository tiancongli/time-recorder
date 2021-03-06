import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainScreen from './components/MainScreen';
import DayModalScreen from './components/DayModalScreen';
import RecordScreen from './components/RecordScreen';
import SplashScreen from 'react-native-splash-screen';

import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

const TodayStack = createStackNavigator(
  {
    Main: { screen: MainScreen },
    Modal: { screen: DayModalScreen }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const RecordStack = createStackNavigator(
  {
    RecordMain: { screen: RecordScreen },
    RecordModal: { screen: DayModalScreen }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);


const RootStack = createBottomTabNavigator(
  {
    Today: TodayStack,
    Records: RecordStack
  },
  {
    tabBarOptions: {
      activeTintColor: '#55e4cf',
      labelStyle: {
        fontSize: 20,
      },
      style: {
        // backgroundColor: 'blue',
      },
    }
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}
