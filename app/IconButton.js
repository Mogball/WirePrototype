import React, {Component} from 'react';

import {
  TouchableWithoutFeedback,
  View
} from 'react-native';

export default class IconButton extends Component {
  constructor(props) {
    super(props);
    this.state = {pressed: false};
    this.renderIcon = this.renderIcon.bind(this);
    this.onPress = this.onPress.bind(this);
    this.onPressIn = this.onPressIn.bind(this);
    this.onPressOut = this.onPressOut.bind(this);
  }
  renderIcon() {
    if ((this.props.isActive() || this.state.pressed) && this.props.renderIconPressed) {
      return this.props.renderIconPressed();
    }
    return this.props.renderIcon();
  }
  onPress() {
    if (this.props.onPress) {
      this.props.onPress();
    }
  }
  onPressIn() {
    this.setState({pressed: true});
    if (this.props.onPressIn) {
      this.props.onPressIn();
    }
  }
  onPressOut() {
    this.setState({pressed: false});
    if (this.props.onPressOut) {
      this.props.onPressOut();
    }
  }
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={this.onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}>
        <View>
          {this.renderIcon()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
