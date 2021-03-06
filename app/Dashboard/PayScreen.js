import React, {Component} from 'react';

import {
    Text,
    View,
    InteractionManager
} from 'react-native';

import styles from './PayScreenModules/PayScreenStyle';

import PayScreenActionPanel from './PayScreenModules/PayScreenActionPanel';
import ScanSuccessModal from './PayScreenModules/ScanSuccessModal';
import TimerMixin from 'react-timer-mixin';
import ReactMixin from 'react-mixin';
import Camera from 'react-native-camera';

export default class PayScreen extends Component {
    constructor(props, context) {
        super(props, context);
        this.readCode = this.readCode.bind(this);
        this.getData = this.getData.bind(this);
        this.getDisplay = this.getDisplay.bind(this);
        this.setDisplay = this.setDisplay.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.renderPlaceholder = this.renderPlaceholder.bind(this);
        this.getCamera = this.getCamera.bind(this);

        this.modalClose = this.modalClose.bind(this);
        this.modalOpen = this.modalOpen.bind(this);
        this.state = {
            modal: false,
            read: false,
            data: null,
            display: 'QR', // ['QR', 'SEND', 'RECEIVE', 'NONE']
            placeholder: true,
            QR: null
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.setState({placeholder: false});
        });
    }

    readCode(data) {
        if (!this.state.read) {
            this.modalOpen();
            this.requestAnimationFrame(() => {
                this.setState({
                    read: true,
                    data: data.data
                });
            });
        }
    }

    getData() {
        return this.state.data;
    }

    getDisplay() {
        return this.state.display;
    }

    setDisplay(display, QR) {
        this.requestAnimationFrame(() => {
            if (this.state.display !== display) {
                this.setState({display: display})
            }
            if (QR) {
                this.setState({QR: QR});
            }
        });
    }

    closeModal() {
        this.requestAnimationFrame(() => {
            this.modalClose();
            InteractionManager.runAfterInteractions(() => {
                this.setState({read: false, data: null});
            });
        });
    }

    modalOpen() {
        this.setState({modal: true});
    }

    modalClose() {
        this.setState({modal: false});
    }

    getCamera() {
        return <Camera
            barCodeTypes={['qr']}
            onBarCodeRead={this.readCode}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
        </Camera>
    }

    render() {
        if (this.state.placeholder) {
            return this.renderPlaceholder();
        }
        let displayItem;
        if (this.state.display == 'QR') {
            if (this.state.modal) {
                displayItem = (
                    <View style={styles.placeholder}/>
                );
            } else {
                displayItem = (
                    this.getCamera()
                );
            }
        } else if (this.state.display == 'SEND') {
            displayItem = (
                <View style={styles.send}>
                    {this.state.QR}
                </View>
            )
        } else if (this.state.display == 'RECEIVE') {
            displayItem = (
                <View style={styles.receive}>
                    {this.state.QR}
                </View>
            );
        } else {
            displayItem = (
                <View style={styles.placeholder}/>
            )
        }
        return (
            <View style={styles.toplevel}>
                <ScanSuccessModal
                    display={this.state.read}
                    getData={this.getData}
                    closeModal={this.closeModal}/>
                <View>
                    {displayItem}
                </View>
                <PayScreenActionPanel
                    modalOpen={this.modalOpen}
                    modalClose={this.modalClose}
                    getDisplay={this.getDisplay}
                    setDisplay={this.setDisplay}/>
            </View>
        );
    }

    renderPlaceholder() {
        return (
            <View style={styles.loadView}>
                <View>
                    <View style={styles.placeholder}/>
                </View>
                <PayScreenActionPanel
                    modalOpen={this.modalOpen}
                    modalClose={this.modalClose}
                    getDisplay={this.getDisplay}
                    setDisplay={this.setDisplay}/>
            </View>
        );
    }

}

ReactMixin(PayScreen.prototype, TimerMixin);