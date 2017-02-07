import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';

import {
  Icon
} from 'react-native-elements';

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
              <SettingsRoot dashboard={this.props.dashboard} navigator={navigator} route={route}/>
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
        <View style={styles.headerToolbar}>
          <Text style={styles.headerTitle}>Settings</Text>
          <Icon name='person' color={palette.pureWhite} size={35}
            containerStyle={{marginRight: 25}}
            onPress={this.props.dashboard.toggleSideMenu}
            underlayColor='transparent'/>
        </View>
        <View style={{flex: 1, margin: 20, alignSelf: 'stretch'}}>
          <SettingsList borderColor='#d6d5d9' defaultItemSize={50}>
            <SettingsList.Header headerText='Account Settings'
              headerStyle={stylesLocal.settingsHeader}/>
            <SettingsList.Item title='AccountOption1' itemWidth={50}
              titleStyle={stylesLocal.settingsName} arrowOffset={8}/>
            <SettingsList.Item title='AccountOption2' itemWidth={50}
              titleStyle={stylesLocal.settingsName} arrowOffset={8}/>
            <SettingsList.Item title='AccountOption3' itemWidth={50}
              titleStyle={stylesLocal.settingsName} arrowOffset={8}/>
            <SettingsList.Header headerStyle={{marginTop:10}} hideBorder/>

            <SettingsList.Header headerText='Wire Settings'
              headerStyle={stylesLocal.settingsHeader}/>
            <SettingsList.Item title='WireOption1' itemWidth={50}
              titleStyle={stylesLocal.settingsName} arrowOffset={8}/>
            <SettingsList.Item title='WireOption2' itemWidth={50}
              titleStyle={stylesLocal.settingsName} arrowOffset={8}/>
            <SettingsList.Item title='WireOption3' itemWidth={50}
              titleStyle={stylesLocal.settingsName} arrowOffset={8}/>
          </SettingsList>
        </View>
      </View>
    );
  }
}

const stylesLocal = StyleSheet.create({

  settingsHeader: {
    fontSize: 20,
    fontWeight: '500',
    color: palette.cyprusLight
  },

  settingsName: {
    color: palette.cyprus, fontSize: 16
  }

});
