import React, {Component} from 'react';

import {
    Navigator,
    View,
    StyleSheet,
    InteractionManager
} from 'react-native';

import HomeScreen from './Dashboard/HomeScreen'
import PayScreen from './Dashboard/PayScreen';
import StoreScreen from './Dashboard/StoreScreen';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import FooterToolbar from "./Dashboard/FooterToolbar";

const screenMap = [
    <HomeScreen/>,
    <PayScreen/>,
    <StoreScreen/>
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
        this.requestAnimationFrame(() => {
            if (index == this.state.index) {
                return;
            } else if (index > this.state.index) {
                this.navigator.push({index: index});
            } else if (index < this.state.index) {
                this.navigator.replacePreviousAndPop({index: index});
            }
            this.setState({index: index});
        });
    }

    isActive(index) {
        return this.state.index === index;
    }

    render() {
        console.log('render');
        return (
            <View style={style.toplevel}>
                <Navigator
                    ref={(navigator) => this.navigator = navigator}
                    initialRoute={{index: 0}}
                    renderScene={(route, navigator) => {
                        return screenMap[route.index];
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
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});

ReactMixin(Dashboard.prototype, TimerMixin);
