import React, {Component} from 'react';

import {
  Navigator,
  Text,
  View,
  TouchableNativeFeedback
} from 'react-native';

import {
  Tabs,
  Tab,
  Icon,
  SideMenu,
  List,
  ListItem
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
    this.state = {screen: routes[0].title,
      isOpen: false};
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
    this.sideMenuOnChange = this.sideMenuOnChange.bind(this);
    this.logout = this.logout.bind(this);
  }

  changeTab(tab) {
    this.setState({screen: tab});
  }
  toggleSideMenu() {
    this.setState({isOpen: !this.state.isOpen});
  }
  sideMenuOnChange(isOpen) {
    this.setState({isOpen: isOpen});
  }
  logout() {
    this.props.navigator.replacePrevious({title: 'LoginScreen', index: 2});
    this.props.navigator.pop();
  }

  render() {
    const menuComponent = (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 45}}>
        <List>
          <ListItem title='MenuItem1' subtitle='Sample Text'/>
          <ListItem title='MenuItem2' subtitle='Sample Text'/>
          <ListItem title='MenuItem3' subtitle='Sample Text'/>
          <ListItem title='Log out'
            component={TouchableNativeFeedback}
            hideChevron={true}
            onPress={this.logout}
            titleContainerStyle={{height: 50, justifyContent: 'center'}}
            titleStyle={{fontSize: 18, color: palette.cyprus, fontWeight: '500'}}/>
        </List>
      </View>
    );

    const selectedTab = this.state.screen;
    return (
      <SideMenu isOpen={this.state.isOpen} menu={menuComponent}
        onChange={this.sideMenuOnChange} menuPosition={'right'}>
        <Tabs
          tabBarStyle={styles.footerToolbar}
          tabBarShadowStyle={{backgroundColor: '#00000000'}}>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6, color: palette.lightBlue}}
            selected={selectedTab === 'DashboardHomeScreen'}
            title={selectedTab === 'DashboardHomeScreen' ? 'HOME' : null}
            renderIcon={() =>
              <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                color={palette.cyprusLight} name='home' type='materialicons' size={33}/>}
            renderSelectedIcon={() =>
              <Icon color={palette.lightBlue} name='home' type='materialicons'/>}
            onPress={() => this.changeTab('DashboardHomeScreen')}>
            <DashboardHomeScreen dashboard={this}/>
          </Tab>
          <Tab
            titleStyle={{fontWeight: 'bold', fontSize: 10}}
            selectedTitleStyle={{marginTop: -1, marginBottom: 6, color: palette.lightBlue}}
            selected={selectedTab === 'DashboardHistoryScreen'}
            title={selectedTab === 'DashboardHistoryScreen' ? 'HISTORY' : null}
            renderIcon={() =>
              <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                color={palette.cyprusLight} name='history' type='materialcommunityicons' size={33}/>}
            renderSelectedIcon={() =>
              <Icon color={palette.lightBlue} name='history' type='materialcommunityicons' size={30}/>}
            onPress={() => this.changeTab('DashboardHistoryScreen')}>
            <DashboardHistoryScreen dashboard={this}/>
          </Tab>
          <Tab
              titleStyle={{fontWeight: 'bold', fontSize: 10}}
              selectedTitleStyle={{marginTop: -1, marginBottom: 6, color: palette.lightBlue}}
              selected={selectedTab === 'DashboardMainScreen'}
              title={selectedTab === 'DashboardMainScreen' ? 'WIRE' : null}
              renderIcon={() =>
                <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                  color={palette.cyprusLight} name='dollar' type='foundation' size={33} />}
              renderSelectedIcon={() =>
                <Icon color={palette.lightBlue} name='dollar' type='foundation' size={30}/>}
              onPress={() => this.changeTab('DashboardMainScreen')}>
              <DashboardMainScreen dashboard={this}/>
            </Tab>
            <Tab
              titleStyle={{fontWeight: 'bold', fontSize: 10}}
              selectedTitleStyle={{marginTop: -1, marginBottom: 6, color: palette.lightBlue}}
              selected={selectedTab === 'DashboardServiceScreen'}
              title={selectedTab === 'DashboardServiceScreen' ? 'SERVICES' : null}
              renderIcon={() =>
                <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                  color={palette.cyprusLight} name='wrench' type='foundation' size={33} />}
              renderSelectedIcon={() =>
                <Icon color={palette.lightBlue} name='wrench' type='foundation' size={30} />}
              onPress={() => this.changeTab('DashboardServiceScreen')}>
              <DashboardServiceScreen dashboard={this}/>
            </Tab>
            <Tab
              titleStyle={{fontWeight: 'bold', fontSize: 10}}
              selectedTitleStyle={{marginTop: -1, marginBottom: 6, color: palette.lightBlue}}
              selected={selectedTab === 'DashboardSettingsScreen'}
              title={selectedTab === 'DashboardSettingsScreen' ? 'SETTINGS' : null}
              renderIcon={() =>
                <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}}
                  color={palette.cyprusLight} name='settings' type='materialcommunityicons' size={33} />}
              renderSelectedIcon={() =>
                <Icon color={palette.lightBlue} name='settings' type='materialcommunityicons' size={30} />}
              onPress={() => this.changeTab('DashboardSettingsScreen')}>
              <DashboardSettingsScreen dashboard={this}/>
            </Tab>
        </Tabs>
      </SideMenu>
    );
  }

}
