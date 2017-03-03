import React, {Component} from 'react';

import {
    TouchableNativeFeedback,
    View,
    StyleSheet
} from 'react-native';

import {
    Icon
} from 'react-native-elements';

const palette = require('../../Style/Palette').default;

export default class IconButton extends Component {
    static get defaultProps() {
        return {
            type: 'material',
            name: 'home',
            size: 33
        }
    }

    constructor(props) {
        super(props);
        this.state = {pressed: false};
        this.onPress = this.onPress.bind(this);
        this.onPressIn = this.onPressIn.bind(this);
        this.onPressOut = this.onPressOut.bind(this);
    }

    onPress() {
        this.props.toolbar.changeTab(this.props.index);
    }

    onPressIn() {
        this.setState({pressed: true});
        if (this.props.onPressIn) {
            this.props.onPressIn();
        }
    }

    onPressOut() {
        this.setState({pressed: false});
        if (this.props.onPressOut) {
            this.props.onPressOut();
        }
    }

    render() {
        const active = this.props.toolbar.isActive(this.props.index);
        const color = this.state.pressed || active ? palette.white : palette.lightGrey1;
        const size = this.state.pressed ? 28 : 33;
        viewStyle = style.container;
        if (active) {
            viewStyle = [viewStyle, {backgroundColor: palette.grey4}];
        }
        return (
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(palette.whiteDark, false)}
                onPress={this.onPress}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}>
                <View style={viewStyle}>
                    <Icon color={color} name={this.props.name} type={this.props.type} size={size}/>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'stretch'
    }
});