import React, {Component} from 'react';

import {
    Modal,
    View,
    ActivityIndicator,
    Text,
    TouchableNativeFeedback
} from 'react-native';

import style from '../Style';

export default class LoadingModal extends Component {
    render() {
        /*const item = !this.props.loading && this.props.visible ? (
            <Text style={style.modalText}>Incorrect emailAddress/phoneNumber or password</Text>
        ) : (
            <ActivityIndicator style={style.loadingIndicator} size="large"/>
        );*/
        return (
            <Modal visible={!!this.props.children}
                   transparent={true}
                   onRequestClose={this.props.close}
                   animationType={"fade"}>
                <View style={style.loadingModalToplevel}>
                    <View style={style.loadingModalDisplay}>
                        <View style={style.loadingIndicatorContainer}>
                            {this.props.children}
                        </View>
                        <ModalButton close={this.props.close} text={this.props.buttonLabel}/>
                    </View>
                </View>
            </Modal>
        );
    }
}

class ModalButton extends Component {
    render() {
        return (
            <View style={style.modalButtonToplevel}>
                <TouchableNativeFeedback onPress={this.props.close}>
                    <View style={style.modalButtonToplevel}>
                        <Text style={style.modalButtonText}>{this.props.text}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}