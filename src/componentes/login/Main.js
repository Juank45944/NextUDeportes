import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Input, Boton, Titulo } from '../lib';

class Main extends Component {
    render() {
        const { containerStyle, botonStyle, imgStyle } = styles;
        return (
            <View>
                <Image style={imgStyle} source={require('../../images/back.jpg')} />
                <View style={containerStyle}>
                    <Titulo>Resultados App</Titulo>
                    <Input
                        placeholder="user@mail.com"
                        autoCorrect={false}
                    />
                    <Input
                        placeholder="contraseña"
                        autoCorrect={false}
                        secureTextEntry

                    />
                    <Boton addStyle={botonStyle}>
                        <Text>Ingresar</Text>
                    </Boton>
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        height: 600,
        paddingTop: 160,
        paddingLeft: 30,
        paddingRight: 30,
    },
    botonStyle: {
        marginTop: 10,
        width: 100,
        alignSelf: 'center'
    },
    imgStyle: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: -2
    }
};

export default Main;
