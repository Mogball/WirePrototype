/**
 * This class represents the scene displayed during app loading, hence it is
 * called the loading screen.
 */

import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Animated,
    ActivityIndicator,
    Modal,
    Easing,
    Image
} from 'react-native';

export default class LoadingScreen extends Component {

    static get defaultProps() {
        return {title: 'LoadingScreen'};
    }

    constructor(props) {
        super(props);
        //this.state = {loaded: false, fadeAnim: new Animated.Value(1)};
        //this._onLoad = this._onLoad.bind(this);
    }

    componentDidMount() {
        if (user) {
            this.props.navigator.push({title: 'Dashboard', index: 4});
        } else {
            this.props.navigator.push({title: 'LaunchScreen', index: 1});
        }
    }

    /*
     _onLoad() {
     this.setState({loaded: true});
     this.props.onLoad();
     Animated.timing(
     this.state.fadeAnim,
     {toValue: 0, duration: 250, easing: Easing.linear}
     ).start();
     this.props.navigator.push({title: 'LaunchScreen', index: 1});
     }*/

    render() {/*
     return (
     <View style={styles.container}>
     <Animated.View style={{opacity: this.state.fadeAnim}}>
     <ActivityIndicator animating={true} color='#D02035' size='large'/>
     </Animated.View>
     <Counter onLoad={this._onLoad}/>
     </View>
     );*/
        return null;
    }

}
/*
 class Counter extends Component {

 constructor(props) {
 super(props);

 // Initialize state
 this.state = {count: 0};
 }

 componentWillMount() {
 // For now, use a timer to simulate loading
 this.loadTimerID = setInterval(() => {
 this.setState({count: this.state.count + 1});
 }, 1000);
 }

 componentDidUpdate() {
 // Upon timer expiration, stop timer and complete loading
 if (this.state.count >= 2) {
 clearInterval(this.loadTimerID);
 this.setState({count: 0});
 this.props.onLoad();
 }
 }

 render() {
 return null;
 }

 }

 const styles = StyleSheet.create({

 container: {
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor: '#F5F5F5'
 },

 });
 */