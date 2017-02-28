import React, {Component} from 'react';

import {
    Navigator,
    Text,
    View,
    TouchableNativeFeedback,
    TouchableWithoutFeedback
} from 'react-native';

import {
    SideMenu,
    List,
    ListItem
} from 'react-native-elements';

import PayScreen from './Dashboard/PayScreen';
import DashboardMainScreen from './DashboardMainScreen';
import DashboardHomeScreen from './DashboardHomeScreen';
import DashboardHistoryScreen from './DashboardHistoryScreen';
import DashboardServiceScreen from './DashboardServiceScreen';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';

import StateButton from "./StateButton";
import FooterToolbar from "./FooterToolbar";


const routes = [
    {title: 'DashboardMainScreen', index: 0},
    {title: 'DashboardHomeScreen', index: 1},
    {title: 'DashboardServiceScreen', index: 2},
    {title: 'DashboardHistoryScreen', index: 3}
];

export default class Dashboard extends Component {

    static get defaultProps() {
        return {title: 'Dashboard'};
    }

    constructor(props) {
        super(props);
        this.state = {
            screen: routes[0].title, index: routes[0].index,
            isOpen: false
        };
        this._back = this._back.bind(this);
        this.changeTab = this.changeTab.bind(this);
        this.toggleSideMenu = this.toggleSideMenu.bind(this);
        this.sideMenuOnChange = this.sideMenuOnChange.bind(this);
        this.logout = this.logout.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    _back() {
        this.refs.nav.pop();
    }

    changeTab(tab) {
        this.refs.nav.replace(tab);
        this.setState({screen: tab.title, index: tab.index});
    }

    toggleSideMenu() {
        this.requestAnimationFrame(() => {
            this.setState({isOpen: !this.state.isOpen});
        });
    }

    sideMenuOnChange(isOpen) {
        this.requestAnimationFrame(() => {
            this.setState({isOpen: isOpen});
        });
    }

    logout() {
        user = null;
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
        return (
            <SideMenu isOpen={this.state.isOpen} menu={menuComponent}
                      onChange={this.sideMenuOnChange} menuPosition={'right'}>
                <Navigator
                    ref="nav"
                    initialRoute={routes[0]}
                    renderScene={(route, navigator) => {
                        if (route.title == 'DashboardMainScreen') {
                            return (
                                <View style={{flex: 1}}>
                                    <PayScreen dashboard={this}/>
                                    <FooterToolbar isActive={this.isActive} routes={routes} changeTab={this.changeTab}/>
                                </View>
                            );
                        } else if (route.title == 'DashboardHomeScreen') {
                            return (
                                <View style={{flex: 1}}>
                                    <DashboardHomeScreen dashboard={this} navigator={navigator}/>
                                    <FooterToolbar isActive={this.isActive} routes={routes} changeTab={this.changeTab}/>
                                </View>
                            );
                        } else if (route.title == 'DashboardServiceScreen') {
                            return (
                                <View style={{flex: 1}}>
                                    <DashboardServiceScreen dashboard={this}/>
                                    <FooterToolbar isActive={this.isActive} routes={routes} changeTab={this.changeTab}/>
                                </View>
                            );
                        } else if (route.title == 'DashboardHistoryScreen') {
                            return (
                                <View style={{flex: 1}}>
                                    <DashboardHistoryScreen dashboard={this}/>
                                    <View style={styles.footerToolbar}>
                                        <View style={{justifyContent: 'center', alignItems: 'center', width: 100}}>
                                            <StateButton onPress={this._back}
                                                         style={stylesLocal.backButton}
                                                         pressedStyle={stylesLocal.backButtonPressed}
                                                         textStyle={stylesLocal.backButtonText}
                                                         textPressedStyle={stylesLocal.backButtonTextPressed}
                                                         text='Back'/>
                                        </View>
                                    </View>
                                </View>

                            );
                        }
                    }}
                />
            </SideMenu>
        );
    }

}

const stylesLocal = {
    backButton: [
        styles.button, {
            height: 35, width: 80, elevation: 6
        }
    ],

    backButtonPressed: [
        styles.button, {
            height: 33, width: 78, elevation: 4
        }
    ],

    backButtonText: [
        styles.buttonText, {
            fontSize: 17,
            paddingHorizontal: 20
        }
    ],

    backButtonTextPressed: [
        styles.buttonTextPressed, {
            fontSize: 17,
            paddingHorizontal: 19
        }
    ],
};

ReactMixin(Dashboard.prototype, TimerMixin);

/*<View style={{flex: 1}}>
 <IconButton
 renderIcon={() => {
 return (<Icon containerStyle={{
 justifyContent: 'center',
 alignItems: 'center', marginTop: 10
 }}
 color={palette.cyprusLight} name='history' type="MaterialCommunityIcons" size={33}/>);
 }}
 renderIconPressed={() => {
 return (<Icon containerStyle={{
 justifyContent: 'center',
 alignItems: 'center', marginTop: 10
 }}
 color={palette.lightBlue} name='history' type="MaterialCommunityIcons" size={33}/>);
 }}
 onPress={() => {
 this.changeTab(routes[3])
 }}
 isActive={() => {
 return this.isActive(3);
 }}/>
 </View>*/