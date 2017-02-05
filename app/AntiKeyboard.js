import React, {Component} from 'react';

import {
  TouchableWithoutFeedback,
  View
} from 'react-native';

// Some silly classes to get rid of the keyboard
export default class AntiKeyboard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var children = this.props.children ? this.props.children : null;
    return (
      <TouchableWithoutFeedback onPress={() => {DISMISS_KEYBOARD()}}>
        {children}
      </TouchableWithoutFeedback>
    );
  }
}
