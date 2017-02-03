import React, {Component} from 'react';

import {
  Navigator,
  Text
} from 'react-native';

import DashboardMainScreen from './DashboardMainScreen';

const routes = [
  {title: 'DashboardMainScreen', index: 0}
];

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator initialRoute={routes[0]}
        configureScene={(route, routeStack) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          if (route.title == 'DashboardMainScreen') {
            return (
              <DashboardMainScreen navigator={navigator} route={route}/>
            );
          }
        }}
      />
    );
  }

}
