import React, {Component} from 'react';

import {
    TextInput
} from 'react-native';

import palette from './Style/Palette';

export default class BarebonesTextInput extends Component {
    static get defaultProps() {
        _onChangeText = function () {
        };
        _onSubmitEditing = function () {
        };
        return {
            onChangeText: _onChangeText,
            placeholder: '',
            keyboardType: 'default',
            returnKeyType: 'next',
            secureTextEntry: false,
            onSubmitEditing: _onSubmitEditing,
            underlineColor: palette.customGreen,
            defaultStyle: {height: 40, width: 150, color: palette.cyprus},
            style: {}
        };
    }

    constructor(props) {
        super(props);
    }

    focus() {
        this.refs.Field.focus();
    }

    render() {
        return (
            <TextInput ref='Field' style={[this.props.defaultStyle, this.props.style]}
                       placeholder={this.props.placeholder}
                       onChangeText={this.props.onChangeText} autoCorrect={false} autoCapitalize='none' maxLength={32}
                       underlineColorAndroid={this.props.underlineColor} autoComplete={false}
                       keyboardType={this.props.keyboardType}
                       secureTextEntry={this.props.secureTextEntry} returnKeyType={this.props.returnKeyType}
                       onSubmitEditing={this.props.onSubmitEditing}
                       placeholderTextColor={this.props.placeholderTextColor}/>
        );
    }
}
