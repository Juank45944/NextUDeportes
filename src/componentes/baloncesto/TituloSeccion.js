import React from 'react';
import { View, Text, Image } from 'react-native';

const TituloSeccion = ({ nombre }) => {
    const { container, imgStyle, textStyle } = styles;
    const imgSource = require('../../images/EstadosUnidos.png');
    
    return (
        <View style={container}>
            <Image style={imgStyle} source={imgSource} />
            <Text style={textStyle}>{nombre}</Text>
        </View>
    );
};

const styles = {
    container: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 10
    },
    imgStyle: {
        width: '20%',
        height: 25
    },
    textStyle: {
        width: '70%',
        fontSize: 17,
        fontWeight: 'bold'
    }
};

export default TituloSeccion;
