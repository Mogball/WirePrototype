import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class HeaderBar extends Component {
    render() {
        return (
            <View style={style.headerToolbar}>
                <Text style={style.headerTitle}>Register</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    headerTitle: {
        fontFamily: 'sans-serif-medium',
        fontWeight: '500',
        fontSize: 25,
        color: palette.pureWhite,
    },

    headerToolbar: {
        backgroundColor: palette.p1pC,
        alignSelf: 'stretch',
        height: 55,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
});