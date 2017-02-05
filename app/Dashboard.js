import React, {Component} from 'react';

import {
  Navigator,
  Text
} from 'react-native';

import DashboardMainScreen from './DashboardMainScreen';
import DashboardHomeScreen from './DashboardHomeScreen';
import DashboardHistoryScreen from './DashboardHistoryScreen';
import DashboardServiceScreen from './DashboardServiceScreen';
import DashboardSettingsScreen from './DashboardSettingsScreen';

const routes = [
  {title: 'DashboardMainScreen', index: 0},
  {title: 'DashboardHomeScreen', index: 1},
  {title: 'DashboardHistoryScreen', index: 2},
  {title: 'DashboardServiceScreen', index: 3},
  {title: 'DashboardSettingsScreen', index: 4}
];

export default class Dashboard extends Component {

  static get defaultProps() {
    return {title: 'Dashboard'};
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator initialRoute={routes[1]}
        configureScene={(route, routeStack) => {
          return Navigator.SceneConfigs.PushFromRight;
        }}
        renderScene={(route, navigator) => {
          if (route.title == 'DashboardMainScreen') {
            return (
              <DashboardMainScreen navigator={navigator} route={route}/>
            );
          } else if (route.title == 'DashboardHomeScreen') {
            return (
              <DashboardHomeScreen navigator={navigator} route={route}/>
            );
          } else if (route.title == 'DashboardHistoryScreen') {
            return (
              <DashboardHistoryScreen navigator={navigator} route={route}/>
            );
          } else if (route.title == 'DashboardServiceScreen') {
            return (
              <DashboardServiceScreen navigator={navigator} route={route}/>
            );
          } else if (route.title == 'DashboardSettingsScreen') {
            return (
              <DashboardSettingsScreen navigator={navigator} route={route}/>
            );
          }
        }}
      />
    );
  }

}
