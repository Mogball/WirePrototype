import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableNativeFeedback,
    Animated,
    Easing
} from 'react-native';

import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';

export default class StateButton extends Component {
    constructor(props) {
        super(props);
        this._onPress = this._onPress.bind(this);
        this._onPressIn = this._onPressIn.bind(this);
        this._onPressOut = this._onPressOut.bind(this);
        this.state = {
            pressed: false,
            elevation: new Animated.Value(props.elevation)
        };
    }

    _onPress() {
        this.props.onPress();
    }

    _onPressIn() {
        this.requestAnimationFrame(() => {
            this.setState({pressed: true});
            Animated.timing(
                this.state.elevation,
                {
                    toValue: this.props.pressedElevation,
                    duration: 50,
                    easing: Easing.bezier(0, 0, 0.36, 0.89)
                }
            ).start();
        });
        if (this.props.onPressIn) {
            this.props.onPressIn();
        }

    }

    _onPressOut() {
        this.requestAnimationFrame(() => {
            this.setState({pressed: false});
            Animated.timing(
                this.state.elevation,
                {
                    toValue: this.props.elevation,
                    duration: 50,
                    easing: Easing.bezier(0, 0, 0.36, 0.89)
                }
            ).start();
        });
        if (this.props.onPressOut) {
            this.props.onPressOut();
        }
    }

    _renderIcon() {
        if (this.state.pressed) {
            if (this.props.renderIcon) {
                return this.props.renderIcon();
            }
        } else {
            if (this.props.renderIconPressed) {
                return this.props.renderIconPressed();
            }
        }
        return null;
    }

    render() {
        let buttonStyle = this.state.pressed ? this.props.pressedStyle : this.props.style;
        let textStyle = this.state.pressed ? this.props.pressedTextStyle : this.props.textStyle;
        let buttonStyleA = [buttonStyle, {elevation: this.state.elevation, backgroundColor: this.props.color}];
        return (
            <Animated.View style={buttonStyleA}>
                <TouchableNativeFeedback
                    onPress={this._onPress}
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                    background={TouchableNativeFeedback.Ripple('rgba(255, 255, 255, 0.5)', true)}>
                    <View style={buttonStyle}>
                        {this._renderIcon()}
                        <Text style={textStyle}>
                            {this.props.text}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </Animated.View>
        );
    }
}

ReactMixin(StateButton.prototype, TimerMixin);