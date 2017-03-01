import React, {Component} from 'react';

import {
    Modal,
    Text,
    View,
    TouchableNativeFeedback,
    TextInput,
    InteractionManager
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import styles from './SendModalStyle';
import f from './Helper';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';

export default class SendModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userInput: "$0.00",
            actualValue: 0,

            placeholder: true
        };
        this.userTyped = this.userTyped.bind(this);
        this.renderPlaceholder = this.renderPlaceholder.bind(this);
        this.cancelSend = this.cancelSend.bind(this);
        this.confirmSend = this.confirmSend.bind(this);
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({placeholder: false});
        });
    }

    userTyped(text) {
        text.preventDefault();
        text = text.nativeEvent.text;
        let cleanedText = '';
        if (text) {
            cleanedText = text.replace(/\D/g, '');
        }
        const intValue = parseInt(cleanedText);
        text = f.formatMoney(intValue);
        this.setState({
            userInput: text,
            actualValue: intValue
        });
    }

    cancelSend() {
        this.requestAnimationFrame(() => {
            this.props.closeModal();
        });
    }

    confirmSend() {
        if (this.state.actualValue > 0) {
            this.props.gotoSend(this.state.actualValue);
            this.props.closeModal();
        }
    }

    render() {
        if (this.state.placeholder) {
            return this.renderPlaceholder();
        }

        return (
            <Modal
                transparent={true}
                visible={this.props.display}
                onRequestClose={this.cancelSend}
                animationType={'fade'}>
                <View style={styles.toplevel}>
                    <View style={styles.popup}>
                        <View style={styles.cancelContainer}>
                            <CancelButton
                                onPress={this.cancelSend}/>
                        </View>
                        <View style={styles.textContainer}>
                            <View style={styles.titleContainer}>
                                <Text>{this.props.message}</Text>
                            </View>
                            <TextInput
                                style={styles.textInput}
                                keyboardType="numeric"
                                maxLength={10}
                                onChange={(text) => this.userTyped(text)}
                                value={this.state.userInput}/>
                        </View>
                        <View style={styles.confirmContainer}>
                            <ConfirmButton
                                onPress={this.confirmSend}/>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }

    renderPlaceholder() {
        return (
            <Modal
                transparent={true}
                visible={this.props.display}
                onRequestClose={this.props.closeModal}
                animationType={'fade'}>
                <View style={styles.toplevel}>
                    <View style={styles.popup}>
                        <View style={styles.cancelContainer}>
                            <CancelButton
                                onPress={this.props.closeModal}/>
                        </View>
                        <View style={styles.textContainer}/>
                        <View style={styles.confirmContainer}>
                            <ConfirmButton
                                onPress={this.props.closeModal}/>
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
                    <Text style={styles.confirmButtonText}>OK</Text>
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

ReactMixin(SendModal.prototype, TimerMixin);