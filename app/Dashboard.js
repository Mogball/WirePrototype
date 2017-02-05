import React, {Component} from 'react';

import {
  Navigator,
  Text
} from 'react-native';

import {
  Tabs,
  Tab,
  Icon
} from 'react-native-elements';

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
    this.state = {screen: 'DashboardMainScreen'};
  }

  changeTab(tab) {
    this.setState({screen: tab});
  }

  render() {
    const selectedTab = this.state.screen;
    return (
      <Tabs>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'DashboardHomeScreen'}
          title={selectedTab === 'DashboardHomeScreen' ? 'HOME' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
          onPress={() => this.changeTab('DashboardHomeScreen')}>
          <DashboardHomeScreen/>
        </Tab>
        <Tab
          titleStyle={{fontWeight: 'bold', fontSize: 10}}
          selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
          selected={selectedTab === 'DashboardHistoryScreen'}
          title={selectedTab === 'DashboardHistoryScreen' ? 'HISTORY' : null}
          renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
          renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
          onPress={() => this.changeTab('DashboardHistoryScreen')}>
          <DashboardHistoryScreen/>
        </Tab>
        <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'DashboardMainScreen'}
            title={selectedTab === 'DashboardMainScreen' ? 'WIRE' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
            onPress={() => this.changeTab('DashboardMainScreen')}>
            <DashboardMainScreen/>
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'DashboardServiceScreen'}
            title={selectedTab === 'DashboardServiceScreen' ? 'SERVICES' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
            onPress={() => this.changeTab('DashboardServiceScreen')}>
            <DashboardServiceScreen/>
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
            selected={selectedTab === 'DashboardSettingsScreen'}
            title={selectedTab === 'DashboardSettingsScreen' ? 'SETTINGS' : null}
            renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
            renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
            onPress={() => this.changeTab('DashboardSettingsScreen')}>
            <DashboardSettingsScreen/>
          </Tab>
      </Tabs>
    );
  }

}
