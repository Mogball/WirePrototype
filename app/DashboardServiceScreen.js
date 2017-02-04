import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';

export default class DashboardServiceScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={[styles.headerToolbar,
          {flexDirection: 'row', alignItems: 'center'}]}>
          <View style={{width: 30}}></View>
          <Text style={styles.title}>Services</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',
          justifyContent: 'center', alignSelf: 'stretch'}}>

          <RoundButton style={{width: 60, height: 60, backgroundColor: '#00BAF0',
            borderRadius: 30, borderWidth: 1, borderColor: '#00B4EE'}}
            pressed={{elevation: 2}} unpressed={{elevation: 8}}
            overlayColor='rgba(100, 100, 100, 0.1)'>
          </RoundButton>

          <RoundButton style={{width: 60, height: 60, backgroundColor: '#00C28B',
            borderRadius: 30, borderWidth: 1, borderColor: '#00BF86',
            marginRight: 38, marginLeft: 38}}
            pressed={{elevation: 2}} unpressed={{elevation: 8}}
            overlayColor='rgba(100, 100, 100, 0.1)'>
          </RoundButton>

          <RoundButton style={{width: 60, height: 60, backgroundColor: '#ED5B38',
            borderRadius: 30, borderWidth: 1, borderColor: '#EC512A'}}
            pressed={{elevation: 2}} unpressed={{elevation: 8}}
            overlayColor='rgba(100, 100, 100, 0.1)'>
          </RoundButton>

        </View>

        <Material marginX={20} marginY={20}
          style={{backgroundColor: '#F2F2F2', elevation: 3}}></Material>

      </View>
    );
  }

}

class Material extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var children = null;
    if (this.props.children) {
      children = this.props.children;
    }
    return (
      <View style={{flex: 1, alignSelf: 'stretch'}}>
        <View style={{height: this.props.marginY}}></View>
        <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
          <View style={{width: this.props.marginX}}></View>
          <View style={[{flex: 1, alignSelf: 'stretch'}, this.props.style]}>
            {children}
          </View>
          <View style={{width: this.props.marginX}}></View>
        </View>
        <View style={{height: this.props.marginY}}></View>
      </View>
    );
  }

}

class RoundButton extends Component {

  constructor(props) {
    super(props);
    this.state = {pressed: false};
  }

  render() {
    var children = null;
    if (this.props.children) {
      children = this.props.children;
    }
    var overlay = null;
    if (this.state.pressed) {
      var style = this.props.style;
      overlay = (
        <View style={{backgroundColor: this.props.overlayColor,
          height: style.height, width: style.width,
          borderRadius: style.borderRadius, right: 1, bottom: 1}}></View>
      );
    }
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          if (this.props.onPress) this.props.onPress();
        }}
        onPressIn={() => {
          this.setState({pressed: true});
          if (this.props.onPressIn) this.props.onPressIn();
        }}
        onPressOut={() => {
          this.setState({pressed: false});
          if (this.props.onPressOut) this.props.onPressOut();
        }}>
        <View style={[this.props.style,
          this.state.pressed ? this.props.pressed : this.props.unpressed]}>
          {overlay}
          {children}
        </View>
      </TouchableWithoutFeedback>
    );
  }

}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    flex: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#D02035',
    textShadowOffset: {width: 1, height: 1},
    textShadowColor: 'rgba(100, 20, 20, 0.2)'
  },

  headerToolbar: {
    height: 60,
    backgroundColor: "#EEEEEE",
    alignSelf: 'stretch',
    elevation: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    borderLeftWidth: 1,
    borderLeftColor: '#DDDDDD',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD'
  },
});
