import React, {Component} from 'react';

import {
    View,
    Text,
    Modal
} from 'react-native';

import styles from './PayScreenActionPanelStyle';
import PayScreenActionPanelButton from './PayScreenActionPanelButton';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import QRCode from 'react-native-qrcode-svg';
import SendModal from './SendModal';
const SessionModel = require('../../Models/SessionModel');

export default class PayScreenActionPanel extends Component {
    constructor(props) {
        super(props);
        this.gotoSend = this.gotoSend.bind(this);
        this.gotoReceive = this.gotoReceive.bind(this);
        this.gotoScan = this.gotoScan.bind(this);
        this.modalSend = this.modalSend.bind(this);
        this.modalReceive = this.modalReceive.bind(this);
        this.modalClose = this.modalClose.bind(this);
        this.state = {
            modal: 'NONE' // ['NONE', 'SEND', 'RECEIVE']
        }
    }

    gotoSend(amount) {
        const QR = (<QRCode size={300} value={'S=' + amount + '&A=' + SessionModel.get().getUser().getUID()}/>);
        this.props.setDisplay('SEND', QR);
    }

    gotoReceive(amount) {
        this.props.setDisplay('RECEIVE');
    }

    gotoScan() {
        this.props.setDisplay('QR');
    }

    modalSend() {
        this.requestAnimationFrame(() => {
            this.props.modalOpen();
            this.setState({modal: 'SEND'});
        });
    }

    modalReceive() {
        this.requestAnimationFrame(() => {
            this.props.modalOpen();
            this.setState({modal: 'RECEIVE'});
        });
    }

    modalClose() {
        this.requestAnimationFrame(() => {
            this.props.modalClose();
            this.setState({modal: 'NONE'});
        });
    }

    render() {
        const sendBtn = (
            <PayScreenActionPanelButton
                iconType="font-awesome"
                iconName="send"
                iconSize={35}
                text="Send"
                onPress={this.modalSend}/>
        );
        const receiveBtn = (
            <PayScreenActionPanelButton
                iconType="materialicons"
                iconName="call-received"
                iconSize={40}
                text="Request"
                onPress={this.modalReceive}/>
        );
        const scanBtn = (
            <PayScreenActionPanelButton
                iconType="material"
                iconName="cancel"
                iconSize={40}
                text="Cancel"
                onPress={this.gotoScan}/>
        );
        const onScan = this.props.getDisplay() == 'QR';
        return (
            <View style={styles.toplevel}>
                <SendModal
                    display={this.state.modal === 'SEND'}
                    closeModal={this.modalClose}
                    gotoSend={this.gotoSend}
                    message="Enter an amount to send"/>
                <SendModal
                    display={this.state.modal === 'RECEIVE'}
                    closeModal={this.modalClose}
                    gotoSend={this.gotoReceive}
                    message="Enter an amount to request"/>
                <View style={styles.btnContainer}>
                    {onScan ? sendBtn : null}
                    {onScan ? receiveBtn : null}
                    {onScan ? null : scanBtn}
                </View>
            </View>
        );
    }
}

ReactMixin(PayScreenActionPanel.prototype, TimerMixin);