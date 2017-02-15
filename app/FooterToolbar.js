import React, {Component} from 'react';

import {
    View
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

import IconButton from './IconButton';

export default class FooterToolbar extends Component {
    constructor(props) {
        super(props);
        this.isActive = this.isActive.bind(this);
        this.changeTab = this.changeTab.bind(this);
    }

    isActive(index) {
        if (this.props.isActive) {
            return this.props.isActive(index);
        }
        return false;
    }

    changeTab(tab) {
        if (this.props.changeTab) {
            this.props.changeTab(tab);
        }
    }

    render() {
        let routes = this.props.routes;
        return (
            <View style={[styles.footerToolbar, {flexDirection: 'row'}]}>
                <View style={{flex: 1}}>
                    <IconButton
                        renderIcon={() => {
                            return (<Icon containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 10
                            }}
                                          color={palette.cyprusLight} name='home' size={33}/>);
                        }}
                        renderIconPressed={() => {
                            return (<Icon containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 10
                            }}
                                          color={palette.lightBlue} name='home' size={33}/>);
                        }}
                        onPress={() => {
                            this.changeTab(routes[1])
                        }}
                        isActive={() => {
                            return this.isActive(1);
                        }}/>
                </View>
                <View style={{flex: 1}}>
                    <IconButton
                        renderIcon={() => {
                            return (<Icon containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 7
                            }}
                                          color={palette.cyprusLight} name='dollar'
                                          type='foundation' size={38}/>);
                        }}
                        renderIconPressed={() => {
                            return (<Icon containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 7
                            }}
                                          color={palette.lightBlue} name='dollar' type='foundation'
                                          size={38}/>);
                        }}
                        onPress={() => {
                            this.changeTab(routes[0])
                        }}
                        isActive={() => {
                            return this.isActive(0);
                        }}/>
                </View>
                <View style={{flex: 1}}>
                    <IconButton
                        renderIcon={() => {
                            return (<Icon containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 10
                            }}
                                          color={palette.cyprusLight} name='shopping-cart'
                                          size={33}/>);
                        }}
                        renderIconPressed={() => {
                            return (<Icon containerStyle={{
                                justifyContent: 'center',
                                alignItems: 'center', marginTop: 10
                            }}
                                          color={palette.lightBlue} name='shopping-cart'
                                          size={33}/>);
                        }}
                        onPress={() => {
                            this.changeTab(routes[2])
                        }}
                        isActive={() => {
                            return this.isActive(2);
                        }}/>
                </View>
            </View>
        );
    }
}