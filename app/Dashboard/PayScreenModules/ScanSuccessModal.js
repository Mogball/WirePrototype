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
import f from './Helper';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
const SessionModel = require('../../Models/SessionModel').default;

/**
 * Extracts the paid or requested amount of funds scanned from a QR code.
 * @param data the encoded data
 *
 * FORMAT:
 * -- The QR code is sending money: "S=[amount]&A=[sendingUID]"
 * -- The QR code is requesting money: "R=[amount]&B=[requestingUID]"
 * -- User 'A' is always losing money
 * -- User 'B' is always gaining money
 * @return [Enum('SEND', 'RECEIVE'), amount, uid]
 */
const decodeData = function (data) {
    let relA = data.split('&');
    let relB = relA[0].split('=');
    let relC = relA[1].split('=');
    return {
        type: relB[0] === 'S' ? 'SEND' : 'RECEIVE',
        amount: parseInt(relB[1]),
        uid: relC[1]
    }
};

export default class ScanSuccessModal extends Component {
    constructor(props, context) {
        super(props, context);
        this.cancelPayment = this.cancelPayment.bind(this);
        this.confirmPayment = this.confirmPayment.bind(this);
    }

    cancelPayment() {
        // Send cancel notification
        this.requestAnimationFrame(() => {
            this.props.closeModal();
        });
    }

    confirmPayment() {
        // Send confirm notification
        // Send server request
        // TODO replace with more secure method
        let firebase = SessionModel.get().getFirebase();
        const data = decodeData(this.props.getData());
        const uidA = data.type === 'SEND' ? data.uid : SessionModel.get().getUser().getUID();
        const uidB = data.type === 'RECEIVE' ? data.uid : SessionModel.get().getUser().getUID();
        const refA = firebase.database().ref('users/' + uidA + '/funds');
        const refB = firebase.database().ref('users/' + uidB + '/funds');
        const reftA = refA.once('value');
        const reftB = refB.once('value');
        let fundsA, fundsB;
        reftA.then(function (snapshotA) {
            fundsA = snapshotA.val();
            reftB.then(function (snapshotB) {
                fundsB = snapshotB.val();
                fundsA -= data.amount;
                fundsB += data.amount;
                firebase.database().ref('users/' + uidA).update({funds: fundsA});
                firebase.database().ref('users/' + uidB).update({funds: fundsB});
            });
        });
        this.requestAnimationFrame(() => {
            this.props.closeModal();
        });
    }

    render() {
        let data = this.props.getData();
        if (data) {
            data = decodeData(data);
            let title = data.type === 'SEND' ? "Make payment" : "Receive funds";
            let uid = data.uid;
            let amount = f.formatMoney(data.amount);
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
                                <Text>{title}</Text>
                                <Text>{uid}</Text>
                                <Text style={styles.amountDisplayText}>{amount}</Text>
                            </View>
                            <View style={styles.confirmContainer}>
                                <ConfirmButton
                                    onPress={this.confirmPayment}/>
                            </View>
                        </View>
                    </View>
                </Modal>
            );
        } else {
            return null;
        }

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

ReactMixin(ScanSuccessModal.prototype, TimerMixin);