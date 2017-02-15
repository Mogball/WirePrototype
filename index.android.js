import React, {Component} from 'react';

import {
    AppRegistry,
    Navigator
} from 'react-native';

import LoadingScreen from './app/LoadingScreen';
import LaunchScreen from './app/LaunchScreen';
import LoginScreen from './app/LoginScreen';
import RegisterScreen from './app/RegisterScreen';
import Dashboard from './app/Dashboard';
import DashboardHistoryScreen from './app/DashboardHistoryScreen';

const routes = [
    {title: 'LoadingScreen', index: 0},
    {title: 'LaunchScreen', index: 1},
    {title: 'LoginScreen', index: 2},
    {title: 'RegisterScreen', index: 3},
    {title: 'Dashboard', index: 4}
];

class WirePrototype extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator
                initialRoute={routes[1]}
                configureScene={(route, routeStack) => {
                    if (route.title == 'LaunchScreen') {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }
                    return Navigator.SceneConfigs.PushFromRight;
                }}
                renderScene={(route, navigator) => {
                    if (route.title == 'LoadingScreen') {
                        return (
                            <LoadingScreen navigator={navigator}
                                           onLoad={() => {
                                           }}
                            />
                        );
                    } else if (route.title == 'LaunchScreen') {
                        return (
                            <LaunchScreen navigator={navigator}
                                          onLogin={() => {
                                          }}
                                          onRegister={() => {
                                          }}
                            />
                        );
                    } else if (route.title == 'LoginScreen') {
                        return (
                            <LoginScreen navigator={navigator}
                                         onLogin={() => {
                                         }}
                                         onRegister={() => {
                                             navigator.push(routes[3])
                                         }}
                                         onRecover={() => {
                                         }}
                            />
                        );
                    } else if (route.title == 'RegisterScreen') {
                        return (
                            <RegisterScreen navigator={navigator} route={route}
                                            onBack={() => {
                                                navigator.replacePrevious(routes[2]);
                                                navigator.pop();
                                            }}
                            />
                        );
                    } else if (route.title == 'Dashboard') {
                        return (
                            <Dashboard ref='dashboard' navigator={navigator} route={route}/>
                        );
                    } else if (route.title == 'DashboardHistoryScreen') {
                        return (
                            <DashboardHistoryScreen dashboard={this.refs.dashboard}/>
                        );
                    }
                }}
            />
        );
    }

}

AppRegistry.registerComponent('WirePrototype', () => WirePrototype);
