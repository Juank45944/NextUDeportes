import React from 'react';
import { View, Text, Image } from 'react-native';

const TituloSeccion = ({ nombre }) => {
    const { container, imgStyle, textStyle } = styles;
    const imgSource = nombre == 'Inglaterra' ? require('../../images/Inglaterra.png') : require('../../images/Espana.png');
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
        width: '50%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        paddingLeft: 10
    },
    imgStyle: {
        width: '25%',
        height: 25
    },
    textStyle: {
        width: '60%',
        fontSize: 17,
        fontWeight: 'bold'
    }
};

export default TituloSeccion;
