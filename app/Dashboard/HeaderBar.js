import React, {Component} from 'react';

import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import palette from '../Style/Palette';

export default class HeaderBar extends Component {
    render() {
        return (
            <View style={style.headerToolbar}>
                <Text style={style.headerTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    headerTitle: {
        fontFamily: 'sans-serif-medium',
        fontWeight: '900',
        fontSize: 22,
        marginLeft: 22,
        color: palette.pureWhite
    },

    headerToolbar: {
        backgroundColor: palette.p1pC,
        alignSelf: 'stretch',
        height: 50,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row'
    }
});