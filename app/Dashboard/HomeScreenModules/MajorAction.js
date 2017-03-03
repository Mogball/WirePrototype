//Vire org
import React, {Component} from 'react';

import {
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    Alert,
    ListView,
} from 'react-native';

import image_google from '../../img/g.png';

export default class MajorAction extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
          <View>
            <Image source={image_google} style={{width: 30, height: 30, marginHorizontal: 10, marginBottom: 10,}}/>
            <Text style={stylesLocal.name}>{this.state.firstLastName}</Text>
          </View>
        );
    }
}
