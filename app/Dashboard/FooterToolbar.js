import React, {Component} from 'react';

import {
    View
} from 'react-native';

import style from './FooterToolbarModules/FooterToolbarStyle';
import IconButton from './FooterToolbarModules/IconButton';

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

    changeTab(index) {
        if (this.props.changeTab) {
            this.props.changeTab(index);
        }
    }

    render() {
        return (
            <View style={style.toplevel}>
                <IconButton index={1} toolbar={this} name="home" type="material"/>
                <IconButton index={0} toolbar={this} name="dollar" type="foundation"/>
                <IconButton index={2} toolbar={this} name="shopping-cart" type="material"/>
            </View>
        );
    }
}