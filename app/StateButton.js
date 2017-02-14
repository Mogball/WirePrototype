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
    if (this.props.onPressIn) {
      this.props.onPressIn();
    }
  }
  _onPressOut() {
    this.setState({pressed: false});
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
    return (
      <TouchableWithoutFeedback
        onPress={this._onPress}
        onPressIn={this._onPressIn}
        onPressOut={this._onPressOut}>
        <View style={this.state.pressed ? this.props.pressedStyle : this.props.style}>
          {this._renderIcon()}
          <Text style={this.state.pressed ? this.props.textPressedStyle : this.props.textStyle}>
            {this.props.text}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
