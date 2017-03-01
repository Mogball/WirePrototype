import React, {Component} from 'react';

import {
    AppRegistry,
    Navigator
} from 'react-native';

import LoadingScreen from './app/Launch/LoadingScreen';
import LaunchScreen from './app/Launch/LaunchScreen';
import LoginScreen from './app/Launch/LoginScreen';
import RegisterScreen from './app/Launch/RegisterScreen';
import Dashboard from './app/Dashboard';
import DashboardHistoryScreen from './app/DashboardHistoryScreen';

const routes = [
    {title: 'LoadingScreen', index: 0},
    {title: 'LaunchScreen', index: 1},
    {title: 'LoginScreen', index: 2},
    {title: 'RegisterScreen', index: 3},
    {title: 'Dashboard', index: 4}
];

import * as firebase from 'firebase';
import SessionModel from './app/Models/SessionModel';

firebase.initializeApp({
    apiKey: "AIzaSyBr1cBlr5gRDua1nPQd600RFj0T-UcEbVE",
    authDomain: "vire-e9eb3.firebaseapp.com",
    databaseURL: "https://vire-e9eb3.firebaseio.com",
    storageBucket: "vire-e9eb3.appspot.com"
});

SessionModel.get().setFirebase(firebase);

class WirePrototype extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigator
                initialRoute={routes[0]}
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
                                           }}/>
                        );
                    } else if (route.title == 'LaunchScreen') {
                        return (
                            <LaunchScreen navigator={navigator}
                                          onLogin={() => {
                                          }}
                                          onRegister={() => {
                                          }}/>
                        );
                    } else if (route.title == 'LoginScreen') {
                        return (
                            <LoginScreen navigator={navigator}
                                         onLogin={() => {
                                             navigator.push(routes[4]);
                                         }}
                                         onRegister={() => {
                                             navigator.push(routes[3])
                                         }}
                                         onRecover={() => {
                                         }}
                                         firebase={firebase}/>
                        );
                    } else if (route.title == 'RegisterScreen') {
                        return (
                            <RegisterScreen navigator={navigator} route={route}
                                            onBack={() => {
                                                navigator.replacePrevious(routes[2]);
                                                navigator.pop();
                                            }}/>
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
