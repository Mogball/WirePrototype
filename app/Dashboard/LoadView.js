import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

export default class LoadView extends Component {
    render() {
        return (
            <View style={styles.toplevel}>
                <ActivityIndicator size={50}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toplevel: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center'
    }
});