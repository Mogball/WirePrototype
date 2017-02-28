import React, {Component} from 'react';

import {
    Modal,
    Text,
    View
} from 'react-native';

import styles from './ScanSuccessModalStyle';

export default class ScanSuccessModal extends Component {
    render() {
        if (this.props.display) {
            return (
                <Modal
                    transparent={true}
                    visible={true}
                    onRequestClose={this.props.closeModal}>
                    <View style={styles.toplevel}>
                        <View style={styles.popup}>
                            <Text>{this.props.getData()}</Text>
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

}

class CancelButton extends Component {

}