import React from 'react';
import { View, TextInput } from 'react-native';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, autoCorrect, addStyle }) => {
    const { viewStyle, inputStyle } = styles;
    return (
        <View style={[viewStyle, addStyle]}>
            <TextInput
                placeholder={placeholder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                autoCorrect={autoCorrect}
                autoCapitalize={'none'}
            />
        </View>
    );
};

const styles = {
    viewStyle: {
        width: '100%',
        height: 40,
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#a4a4a4',
        backgroundColor: '#fff'
    },
    inputStyle: {
        color: '#000',
        width: '100%',
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        fontSize: 19,
        lineHeight: 24,
        flex: 2
    }
};

export { Input };
