import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    ListView
} from 'react-native';

import {
    Card,
    Icon
} from 'react-native-elements';

export default class DashboardServiceScreen extends Component {

    static get defaultProps() {
        return {title: 'DashboardServiceScreen'};
    }

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        var buttonAssembly1 = (
            <View style={{
                height: 80, alignSelf: 'stretch', flex: 1,
                flexDirection: 'row', marginTop: 23
            }}>
                <View style={[stylesLocal.buttonAssembly, {flex: 2}]}>
                    <View style={stylesLocal.buttonHolder}>
                        <RoundButton style={[stylesLocal.button,
                            {backgroundColor: '#4fc3f7', borderColor: '#4dc0f4'}]}
                                     pressed={stylesLocal.buttonPressed} unpressed={{elevation: 4}}/>
                    </View>
                    <Text style={stylesLocal.buttonAssemblyText}>Refer a friend</Text>
                </View>
                <View style={[stylesLocal.buttonAssembly, {flex: 1.5}]}>
                    <View style={stylesLocal.buttonHolder}>
                        <RoundButton style={[stylesLocal.button,
                            {backgroundColor: '#ff9800', borderColor: '#fc9500'}]}
                                     pressed={stylesLocal.buttonPressed} unpressed={{elevation: 8}}/>
                    </View>
                    <Text style={stylesLocal.buttonAssemblyText}>Transfer</Text>
                </View>
                <View style={[stylesLocal.buttonAssembly, {flex: 2}]}>
                    <View style={stylesLocal.buttonHolder}>
                        <RoundButton style={[stylesLocal.button,
                            {backgroundColor: '#00C28B', borderColor: '#00BF86'}]}
                                     pressed={stylesLocal.buttonPressed} unpressed={{elevation: 8}}/>
                    </View>
                    <Text style={stylesLocal.buttonAssemblyText}>Wire loans</Text>
                </View>
            </View>
        );
        var paymentsItem = (
            <Card title='Payments' titleStyle={stylesLocal.materialTitleText}
                  containerStyle={stylesLocal.materialBlock}>
                <Text>List upcoming payments for the user and a button to pay</Text>
            </Card>
        );
        var shopsItem = (
            <Card title='Shop with Wire' titleStyle={stylesLocal.materialTitleText}
                  containerStyle={stylesLocal.materialBlock}>
                <Text>Show nearby stores or online stores that accept Wire</Text>
            </Card>
        );
        var graphsItem = (
            <Card title='Finances' titleStyle={stylesLocal.materialTitleText}
                  containerStyle={stylesLocal.materialBlock}>
                <Text>Show some graphs about the user's finances</Text>
            </Card>
        );
        var insuranceItem = (
            <Card title='Wire Insurance' titleStyle={stylesLocal.materialTitleText}
                  containerStyle={stylesLocal.materialBlock}>
                <Text>Why not offer insurance through wire xd</Text>
            </Card>
        );

        this.itemList = ds.cloneWithRows([
            buttonAssembly1, paymentsItem, shopsItem, graphsItem, insuranceItem
        ]);
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={styles.headerToolbar}>
                    <Text style={styles.headerTitle}>Services</Text>
                    <Icon name='person' color={palette.pureWhite} size={35}
                          containerStyle={{marginRight: 25}}
                          onPress={this.props.dashboard.toggleSideMenu}
                          underlayColor='transparent'/>
                </View>
                <View style={{flex: 1, alignSelf: 'stretch'}}>
                    <ListView
                        dataSource={this.itemList}
                        renderRow={(rowItem) => {
                            return rowItem;
                        }}/>
                </View>
            </View>
        );
    }

}

class RoundButton extends Component {

    static get defaultProps() {
        return {
            overlayColor: 'rgba(100, 100, 100, 0.1)'
        };
    }

    constructor(props) {
        super(props);
        this.state = {pressed: false};
    }

    render() {
        var children = null;
        if (this.props.children) {
            children = this.props.children;
        }
        var overlay = null;
        if (this.state.pressed) {
            var style = this.props.style;
            if (!style.height) {
                var i = 0;
                while (!style.height && i < this.props.style.length) {
                    style = this.props.style[i];
                }
            }
            overlay = (
                <View style={{
                    backgroundColor: this.props.overlayColor,
                    height: style.height, width: style.width,
                    borderRadius: style.borderRadius, right: 1, bottom: 1
                }}/>
            );
        }
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    if (this.props.onPress) this.props.onPress();
                }}
                onPressIn={() => {
                    this.setState({pressed: true});
                    if (this.props.onPressIn) this.props.onPressIn();
                }}
                onPressOut={() => {
                    this.setState({pressed: false});
                    if (this.props.onPressOut) this.props.onPressOut();
                }}>
                <View style={[this.props.style,
                    this.state.pressed ? this.props.pressed : this.props.unpressed]}>
                    {overlay}
                    {children}
                </View>
            </TouchableWithoutFeedback>
        );
    }

}

const stylesLocal = {

    buttonAssembly: {
        alignItems: 'center', justifyContent: 'center'
    },

    buttonAssemblyText: {
        fontSize: 13.5,
        color: palette.cyprusLight,
        fontWeight: '400', top: 5
    },

    button: {
        width: 60, height: 60,
        borderRadius: 30, borderWidth: 1
    },

    buttonPressed: {
        width: 58, height: 58, borderRadius: 29, elevation: 2
    },

    buttonHolder: [styles.container, {width: 60, height: 60}],

    materialTitleText: {
        color: palette.cyprus, fontSize: 20,
        padding: 0, margin: 0, marginBottom: 2, fontWeight: '500'
    },

    materialBlock: {paddingTop: 5, elevation: 2, margin: 20}


};
