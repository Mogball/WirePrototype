import React, {Component} from 'react';

import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

export default class StateButton extends Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
    this._onPressIn = this._onPressIn.bind(this);
    this._onPressOut = this._onPressOut.bind(this);
    this.state = {pressed: false};
  }
  _onPress() {
    this.props.onPress();
  }
  _onPressIn() {
    this.setState({pressed: true});
  }
  _onPressOut() {
    this.setState({pressed: false});
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this._onPress}
        onPressIn={this._onPressIn}
        onPressOut={this._onPressOut}>
        <View style={this.state.pressed ? this.props.pressedStyle : this.props.style}>
          <Text style={this.state.pressed ? this.props.textPressedStyle : this.props.textStyle}>
            {this.props.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
