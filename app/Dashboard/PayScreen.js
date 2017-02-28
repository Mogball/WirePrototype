import React, {Component} from 'react';

import {
    Text,
    View
} from 'react-native';

import styles from './PayScreenStyle';

import PayScreenActionPanel from './PayScreenActionPanel/PayScreenActionPanel';
import ScanSuccessModal from './PayScreenActionPanel/ScanSuccessModal';
import Camera from 'react-native-camera';

export default class PayScreen extends Component {
    constructor(props) {
        super(props);
        this.readCode = this.readCode.bind(this);
        this.getData = this.getData.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {read: false, data: null};
    }

    readCode(data) {
        if (!this.state.read) {
            this.setState({read: true, data: data.data});
        }
    }

    getData() {
        return this.state.data;
    }

    closeModal() {
        this.setState({read: false, data: null});
    }

    render() {
        return (
            <View style={styles.toplevel}>
                <ScanSuccessModal
                    display={this.state.read}
                    getData={this.getData}
                    closeModal={this.closeModal}/>
                <View>
                    <Camera
                        barCodeTypes={['qr']}
                        onBarCodeRead={this.readCode}
                        style={styles.preview}
                        aspect={Camera.constants.Aspect.fill}>
                    </Camera>
                </View>
                <PayScreenActionPanel/>
            </View>
        );
    }

    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}