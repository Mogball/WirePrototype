import React, {Component} from 'react';

import {
    Navigator,
    View,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    StyleSheet,
    InteractionManager
} from 'react-native';

import HomeScreen from './Dashboard/HomeScreen'
import PayScreen from './Dashboard/PayScreen';
import StoreScreen from './Dashboard/StoreScreen';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import FooterToolbar from "./Dashboard/FooterToolbar";

const routes = [
    {title: 'PayScreen', index: 0},
    {title: 'HomeScreen', index: 1},
    {title: 'StoreScreen', index: 2}
];

const screenMap = [
    <PayScreen/>,
    <HomeScreen/>,
    <StoreScreen/>
];

export default class Dashboard extends Component {

    static get defaultProps() {
        return {title: 'Dashboard'};
    }

    constructor(props) {
        super(props);
        this.state = {
            index: 1
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
            <View style={style.toplevel}>
                {screenMap[this.state.index]}
                <FooterToolbar isActive={this.isActive} routes={routes} changeTab={this.changeTab}/>
            </View>
        );
    }

}

const style = StyleSheet.create({
    toplevel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch'
    }
});

ReactMixin(Dashboard.prototype, TimerMixin);
