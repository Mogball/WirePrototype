import React, {Component} from 'react';

import {
    Navigator,
    View,
    StyleSheet,
    InteractionManager
} from 'react-native';

import palette from './Style/Palette';
import HomeScreen from './Dashboard/HomeScreen'
import PayScreen from './Dashboard/PayScreen';
import StoreScreen from './Dashboard/StoreScreen';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import FooterToolbar from "./Dashboard/FooterToolbar";

const routes = [
    {title: 'PayScreen', index: 1},
    {title: 'HomeScreen', index: 0},
    {title: 'StoreScreen', index: 2}
];


export default class Dashboard extends Component {

    static get defaultProps() {
        return {title: 'Dashboard'};
    }

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
        this.changeTab = this.changeTab.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    changeTab(index) {
        InteractionManager.runAfterInteractions(() => {
            this.requestAnimationFrame(() => {
                this.setState({index: index});
            });
        });
    }

    isActive(index) {
        return this.state.index === index;
    }

    render() {
        return (
            <View style={{height: 500}}>
                <Navigator
                    sceneStyle={{height: 500}}
                    initialRoute={{index: 0}}
                    renderScene={(route, navigator) => {
                    if (route.index === 0) {
                        return (
                            <HomeScreen/>
                        );
                    }
                }}
                />
                <FooterToolbar isActive={this.isActive} changeTab={this.changeTab}/>
            </View>
        );
    }

}

const style = StyleSheet.create({
    toplevel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        backgroundColor: palette.white
    }
});

ReactMixin(Dashboard.prototype, TimerMixin);
