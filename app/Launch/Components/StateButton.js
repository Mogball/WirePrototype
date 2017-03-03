import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Animated,
    Easing
} from 'react-native';

import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

export default class StateButton extends Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
        this.props.onPress();
    }

    render() {
        const buttonStyle = [this.props.style, {backgroundColor: this.props.color, elevation: this.props.elevation}];
        return (
            <Animated.View style={buttonStyle}>
                <TouchableNativeFeedback
                    onPress={this._onPress}
                    background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.5)', true)}>
                    <View style={this.props.style}>
                        <Text style={this.props.textStyle}>
                            {this.props.text}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </Animated.View>
        );
    }
}

ReactMixin(StateButton.prototype, TimerMixin);