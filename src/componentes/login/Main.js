import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../../actions';
import { Input, Boton, Titulo, Spinner } from '../lib';

class Main extends Component {

    mostrarBoton() {
        const { botonStyle } = styles;
        if (this.props.loading) {
            return <Spinner />;
        }
        return (
            <Boton
                addStyle={botonStyle} 
                onPress={() => this.props.loginUser(this.props.email, this.props.password)}
            >
                <Text>Ingresar</Text>
            </Boton>
        );
    }

    render() {
        const { containerStyle, imgStyle, errorTextStyle } = styles;
        return (
            <View>
                <Image style={imgStyle} source={require('../../images/back.jpg')} />
                <View style={containerStyle}>
                    <Titulo>Resultados App</Titulo>
                    <Input
                        placeholder="user@mail.com"
                        autoCorrect={false}
                        onChangeText={this.props.emailChanged}
                        value={this.props.email}
                    />
                    <Input
                        placeholder="contraseña"
                        autoCorrect={false}
                        secureTextEntry
                        onChangeText={this.props.passwordChanged}
                        value={this.props.password}
                    />
                    <Text style={errorTextStyle}>{this.props.errorMsg}</Text>

                    {this.mostrarBoton()}

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
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 22
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        loading: state.auth.loading,
        errorMsg: state.auth.errorMsg
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(Main);
