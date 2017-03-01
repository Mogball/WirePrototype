import React, {Component} from 'react';

import {
    Modal,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import styles from './ScanSuccessModalStyle';

export default class ScanSuccessModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.cancelPayment = this.cancelPayment.bind(this);
        this.confirmPayment = this.confirmPayment.bind(this);
    }

    cancelPayment() {
        // Send cancel notification
        this.props.closeModal();
    }

    confirmPayment() {
        // Send confirm notification
        // Send server request
        this.props.closeModal();
    }

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.display}
                onRequestClose={this.cancelPayment}
                animationType={'fade'}>
                <View style={styles.toplevel}>
                    <View style={styles.popup}>
                        <View style={styles.cancelContainer}>
                            <CancelButton
                                onPress={this.cancelPayment}/>
                        </View>
                        <View style={styles.textContainer}>
                            <Text>{this.props.getData()}</Text>
                        </View>
                        <View style={styles.confirmContainer}>
                            <ConfirmButton
                                onPress={this.confirmPayment}/>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

class ConfirmButton extends Component {
    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}>
                <View style={styles.confirmButtonToplevel}>
                    <Text style={styles.confirmButtonText}>CONFIRM</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

class CancelButton extends Component {
    render() {
        return (
            <View style={styles.cancelButtonToplevel}>
                <View style={styles.cancelButton}>
                    <TouchableNativeFeedback
                        onPress={this.props.onPress}
                        background={TouchableNativeFeedback.Ripple('rgba(0, 0, 0, 0.3', true)}>
                        <View style={styles.cancelButton}>
                            <Icon name="close" type="materialcommunityicons" size={30}/>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}