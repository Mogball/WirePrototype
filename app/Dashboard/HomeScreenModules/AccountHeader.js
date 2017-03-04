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
            accountBalance: props.user.funds,
            pointBalance: props.user.points,
            fullName: props.user.first_name + " " + props.user.last_name
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={image_google} style={styles.photo}/>
                <Text style={styles.text}>
                    {this.state.fullName}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 55,
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
