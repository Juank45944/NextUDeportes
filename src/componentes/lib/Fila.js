import React from 'react';
import { View, Text } from 'react-native';

const Fila = ({ local, visitante, resultado }) => {
    const { container, textoLeft, textoRight, resultadoCont } = styles;
    return (
        <View style={container}>
                <Text style={textoLeft}>{local}</Text>
                <Text style={resultadoCont}>{resultado}</Text>
                <Text style={textoRight}>{visitante}</Text>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderColor: '#aeaeae'
    },
    textoLeft: {
        width: '30%'
    },
    textoRight: {
        width: '30%',
        textAlign: 'right'
    },
    resultadoCont: {
        width: '20%',
        textAlign: 'center'
    }
};

export default Fila;
