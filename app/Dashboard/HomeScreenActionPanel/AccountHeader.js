//Vire org
import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    Alert,
    ListView,
} from 'react-native';

import image_google from '../../img/g.png';

export default class AccountHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true,
            accountBalance: 1000000,
            pointBalance: 54232,
            firstLastName: user ? user.firstName + " " + user.lastName : "Zoe Brown"
        };
    }


    render() {
        return (
          <View style={styles.container}>
            <Image source={image_google} style={styles.photo} />
            <Text style={styles.text}>
              {this.state.firstLastName}
            </Text>
          </View>


        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
