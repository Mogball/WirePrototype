import React, {Component} from 'react';

import {
    Modal,
    View,
    ActivityIndicator
} from 'react-native';

import style from '../Style';
const palette = require('../../Style/Palette').default;

export default class LoadingModal extends Component {
    render() {
        return (
            <Modal visible={this.props.visible} transparent={true} onRequestClose={this.props.close}>
                <View style={{
                    flex: 1,
                    backgroundColor: palette.grey3,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{width: 300, height: 200, backgroundColor: 'white'}}>
                        <ActivityIndicator
                            style={{height: 80}}
                            size="large"
                        />
                    </View>
                </View>
            </Modal>
        );
    }
}