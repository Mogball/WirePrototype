import React, {Component} from 'react';

import {
  Navigator,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
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

import StateButton from "./StateButton";
import IconButton from "./IconButton";

const routes = [
  {title: 'DashboardMainScreen', index: 0},
  {title: 'DashboardHomeScreen', index: 1},
  {title: 'DashboardServiceScreen', index: 2},
];

export default class Dashboard extends Component {

  static get defaultProps() {
    return {title: 'Dashboard'};
  }

  constructor(props) {
    super(props);
    this.state = {screen: routes[0].title, index: routes[1].index,
      isOpen: false};
    this.toggleSideMenu = this.toggleSideMenu.bind(this);
    this.sideMenuOnChange = this.sideMenuOnChange.bind(this);
    this.logout = this.logout.bind(this);
    this.isActive = this.isActive.bind(this);
  }

  changeTab(tab) {
    this.setState({screen: tab.title, index: tab.index});
    this.refs.nav.replace(tab);
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
  isActive(index) {
    return this.state.index === index;
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
        <Navigator
          ref="nav"
          initialRoute={routes[1]}
          configureScene={(route, routeStack) => {
            return Navigator.SceneConfigs.PushFromRight;
          }}
          renderScene={(route, navigator) => {
            if (route.title == 'DashboardMainScreen') {
              return (
                <DashboardMainScreen dashboard={this}/>
              );
            } else if (route.title == 'DashboardHomeScreen') {
              return (
                <DashboardHomeScreen dashboard={this}/>
              );
            } else if (route.title == 'DashboardServiceScreen') {
              return (
                <DashboardServiceScreen dashboard={this}/>
              );
            }
          }}
        />
        <View style={[styles.footerToolbar, {flexDirection: 'row'}]}>
          <View style={{flex: 1}}>
            <IconButton
              renderIcon={() => {return (<Icon containerStyle={{justifyContent: 'center',
                alignItems: 'center', marginTop: 10}}
              color={palette.cyprusLight} name='home' size={33}/>);}}
              renderIconPressed={() => {return (<Icon containerStyle={{justifyContent: 'center',
                alignItems: 'center', marginTop: 10}}
              color={palette.lightBlue} name='home' size={33}/>);}}
              onPress={() => {this.changeTab(routes[1])}}
              isActive={() => {return this.isActive(1);}}/>
          </View>
          <View style={{flex: 1}}>
            <IconButton
              renderIcon={() => {return (<Icon containerStyle={{justifyContent: 'center',
                alignItems: 'center', marginTop: 7}}
              color={palette.cyprusLight} name='dollar' type='foundation' size={38}/>);}}
              renderIconPressed={() => {return (<Icon containerStyle={{justifyContent: 'center',
                alignItems: 'center', marginTop: 7}}
              color={palette.lightBlue} name='dollar' type='foundation' size={38}/>);}}
              onPress={() => {this.changeTab(routes[0])}}
              isActive={() => {return this.isActive(0);}}/>
          </View>
          <View style={{flex: 1}}>
            <IconButton
              renderIcon={() => {return (<Icon containerStyle={{justifyContent: 'center',
                alignItems: 'center', marginTop: 10}}
              color={palette.cyprusLight} name='shopping-cart' size={33}/>);}}
              renderIconPressed={() => {return (<Icon containerStyle={{justifyContent: 'center',
                alignItems: 'center', marginTop: 10}}
              color={palette.lightBlue} name='shopping-cart' size={33}/>);}}
              onPress={() => {this.changeTab(routes[2])}}
              isActive={() => {return this.isActive(2);}}/>
          </View>
        </View>
      </SideMenu>
    );
  }

}
