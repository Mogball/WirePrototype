import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';

const routes = [
  {title: 'SettingsRoot', index: 0}
];

import SettingsList from './SettingsList';

export default class DashboardSettingsScreen extends Component {

  static get defaultProps() {
    return {title: 'DashboardSettingsScreen'};
  }

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
          if (route.title == 'SettingsRoot') {
            return (
              <SettingsRoot navigator={navigator} route={route}/>
            );
          }
        }}/>
    );
  }
}

class SettingsRoot extends Component {
  static get defaultProps() {
    return {title: 'SettingsRoot'};
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.screen}>
        <View style={[styles.headerToolbar,
          {flexDirection: 'row', alignItems: 'center'}]}>
          <View style={{width: 30}}></View>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={{flex: 1, marginTop: 20, marginBottom: 20,
          marginLeft: 20, marginRight: 20}}>
          <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
            <SettingsList.Header headerText='Account Settings'
              headerStyle={styles.settingsHeader}/>
            <SettingsList.Item title='AccountOption1' itemWidth={50}
              titleStyle={{color: '#444444', fontSize: 16}} arrowOffset={8}/>
            <SettingsList.Item title='AccountOption2' itemWidth={50}
              titleStyle={{color: '#444444', fontSize: 16}} arrowOffset={8}/>
            <SettingsList.Item title='AccountOption3' itemWidth={50}
              titleStyle={{color: '#444444', fontSize: 16}} arrowOffset={8}/>
            <SettingsList.Header headerStyle={{marginTop:10}} hideBorder/>
            <SettingsList.Header headerText='Wire Settings'
              headerStyle={styles.settingsHeader}/>
            <SettingsList.Item title='WireOption1' itemWidth={50}
              titleStyle={{color: '#444444', fontSize: 16}} arrowOffset={8}/>
            <SettingsList.Item title='WireOption2' itemWidth={50}
              titleStyle={{color: '#444444', fontSize: 16}} arrowOffset={8}/>
            <SettingsList.Item title='WireOption3' itemWidth={50}
              titleStyle={{color: '#444444', fontSize: 16}} arrowOffset={8}/>
          </SettingsList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  screen: {
    backgroundColor: '#EDEDED',
    flex: 1
  },

  settingsHeader: {fontSize: 18, color: '#009688', marginBottom: 5, fontWeight: '500'},

  headerToolbar: {
    height: 60,
    backgroundColor: "#D02035",
    alignSelf: 'stretch',
    elevation: 4,
    borderWidth: 1,
    borderColor: '#CE1E33'
  },

  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#EEEEEE',
  },

  settingHeader: {
    fontSize: 20,
    fontWeight: '500',
    color: '#707270'
  }

});
