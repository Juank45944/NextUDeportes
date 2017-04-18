import React from 'react';
import { View, Text } from 'react-native';

const Titulo = (props) => {
    const { contenedorStyles, tituloStyles, addStyle } = styles;
    return (
        <View style={[contenedorStyles, addStyle]}>
            <Text style={tituloStyles}>{props.children}</Text>
        </View>
    );
};

const styles = {
    contenedorStyles: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 80,
        backgroundColor: 'rgba(0,0,0,0)'
    },
    tituloStyles: {
        fontSize: 40,
        color: '#FEFF39'
    }
};

export { Titulo };
