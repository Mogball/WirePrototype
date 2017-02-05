import React, {Component} from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  ListView
} from 'react-native';

export default class DashboardServiceScreen extends Component {

  static get defaultProps() {
    return {title: 'DashboardServiceScreen'};
  }

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var buttonAssembly1 = (
      <View style={{height: 80, alignSelf: 'stretch', flex: 1,
        flexDirection: 'row', marginTop: 23}}>
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
    );

    var paymentsItem = (
      <View style={{backgroundColor: '#F2F2F2', elevation: 3,
        height: 200, margin: 20}}>
        <View >
          <Text style={styles.materialTitleText}>Payments</Text>
        </View>
      </View>
    );

    var shopsItem = (
      <View style={{backgroundColor: '#F2F2F2', elevation: 3,
        height: 200, marginLeft: 20, marginRight: 20, marginBottom: 20}}>
        <View>
          <Text style={styles.materialTitleText}>Shop with Wire</Text>
        </View>
      </View>
    );

    this.itemList = ds.cloneWithRows([
      buttonAssembly1, paymentsItem, shopsItem
    ]);
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={[styles.headerToolbar,
          {flexDirection: 'row', alignItems: 'center'}]}>
          <View style={{width: 30}}></View>
          <Text style={styles.title}>Services</Text>
        </View>
        <ListView
          dataSource={this.itemList}
          renderRow={(rowItem) => {return rowItem;}}/>
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
    flex: 1,
    backgroundColor: '#EDEDED'
  },

  title: {
    fontSize: 30,
    fontWeight: '500',
    color: '#EEEEEE',
  },

  headerToolbar: {
    height: 60,
    backgroundColor: "#D02035",
    alignSelf: 'stretch',
    elevation: 4,
    borderWidth: 1,
    borderColor: '#CE1E33'
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
