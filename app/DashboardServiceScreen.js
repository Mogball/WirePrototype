import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native';

export default class DashboardServiceScreen extends Component {

  static get defaultProps() {
    return {title: 'DashboardServiceScreen'};
  }

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
        <View style={{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
          <View style={{flexDirection: 'row', top: 23, marginBottom: 23}}>
            <View style={[styles.buttonAssembly, {flex: 2}]}>
              <RoundButton style={{width: 60, height: 60, backgroundColor: '#00BAF0',
                borderRadius: 30, borderWidth: 1, borderColor: '#00B4EE'}}
                pressed={{elevation: 2}} unpressed={{elevation: 8}}
                overlayColor='rgba(100, 100, 100, 0.1)'>
              </RoundButton>
              <Text style={[styles.buttonAssemblyText, {top: 5}]}>Refer a friend</Text>
            </View>
            <View style={[styles.buttonAssembly, {flex: 1.5}]}>
              <RoundButton style={{width: 60, height: 60, backgroundColor: '#ED5B38',
                borderRadius: 30, borderWidth: 1, borderColor: '#EC512A'}}
                pressed={{elevation: 2}} unpressed={{elevation: 8}}
                overlayColor='rgba(100, 100, 100, 0.1)'>
              </RoundButton>
              <Text style={[styles.buttonAssemblyText, {top: 5}]}>Remote transfer</Text>
            </View>
            <View style={[styles.buttonAssembly, {flex: 2}]}>
              <RoundButton style={{width: 60, height: 60, backgroundColor: '#00C28B',
                borderRadius: 30, borderWidth: 1, borderColor: '#00BF86'}}
                pressed={{elevation: 2}} unpressed={{elevation: 8}}
                overlayColor='rgba(100, 100, 100, 0.1)'>
              </RoundButton>
              <Text style={[styles.buttonAssemblyText, {top: 5}]}>Wire loans</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 2, alignItems: 'center', alignSelf: 'stretch',
          justifyContent: 'center'}}>
          <Material margin={[20, 20, 20, 10]}
            style={{flex: 1, backgroundColor: '#F2F2F2', elevation: 3}}>
            <View >
              <Text style={styles.materialTitleText}>Payments</Text>
            </View>
          </Material>
          <Material margin={[20, 20, 10, 20]}
            style={{flex: 1, backgroundColor: '#F2F2F2', elevation: 3}}>
            <View>
              <Text style={styles.materialTitleText}>Shop with Wire</Text>
            </View>
          </Material>
        </View>
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
      <View style={{flex: this.props.style.flex, alignSelf: 'stretch'}}>
        <View style={{height: this.props.margin[2]}}></View>
        <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
          <View style={{width: this.props.margin[0]}}></View>
          <View style={[{flex: 1, alignSelf: 'stretch'}, this.props.style]}>
            {children}
          </View>
          <View style={{width: this.props.margin[1]}}></View>
        </View>
        <View style={{height: this.props.margin[3]}}></View>
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

  buttonAssembly: {
    alignItems: 'center'
  },

  buttonAssemblyText: {
    fontSize: 13,
    color: '#555555',
    fontWeight: '400'
  },

  materialTitleBlock: {
    borderBottomWidth: 1,
    borderBottomColor: '#555555'
  },

  materialTitleText: {fontSize: 20, textAlign: 'center',
    fontWeight: '500', alignSelf: 'stretch', borderBottomWidth: 2,
    borderBottomColor: '#D02035', paddingBottom: 3}

});
