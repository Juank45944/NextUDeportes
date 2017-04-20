import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { rowPressed, apuestaLocalChanged, apuestaVisitanteChanged, apostar } from '../../actions';
import { Input, Boton, Spinner } from '../lib';

class Fila extends Component {
    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut();
    }

    renderLoadingApuesta() {
        const {
            loadingApuesta,
            apuestaLocal,
            apuestaVisitante,
            id,
            pendientes,
            apostados,
            apostar } = this.props;
        if (loadingApuesta) {
            return <Spinner />;
        }
        if (apostados.length !== 1) {
            console.log('entered' + apostados);
            for (const i of apostados) {
                if (i === id) {
                    return (
                        <Icon
                            name="ios-checkmark-circle"
                            color="#82e71b"
                            size={40}
                            style={{ alignSelf: 'center' }}
                        />
                    );
                }
            }
        }
        return (
            <Boton
                onPress={
                    () => { apostar(apuestaLocal, apuestaVisitante, id, pendientes, apostados); }
                }
            >
                <Text>Enviar</Text>
            </Boton>
        );
    }

    renderDetail() {
        const { rowSelected,
            id,
            apuestaLocalChanged,
            apuestaVisitanteChanged,
            apuestaLocal,
            apuestaVisitante,
            apostar } = this.props;
        const { apuestaContainer, inputsContainer, inputStyle, textoIntroduce } = styles;
        if (rowSelected === id) {
            return (
                <View style={apuestaContainer}>
                    <Text style={textoIntroduce}>Introduce el marcador al final del partido</Text>
                    <View style={inputsContainer}>
                        <Input
                            addStyle={inputStyle}
                            autoCorrect={false}
                            onChangeText={apuestaLocalChanged}
                            value={apuestaLocal}
                        />
                        <Input
                            addStyle={inputStyle}
                            autoCorrect={false}
                            onChangeText={apuestaVisitanteChanged}
                            value={apuestaVisitante}
                        />
                    </View>

                    {this.renderLoadingApuesta()}

                </View>
            );
        }
    }

    render() {
        const { local, visitante, id } = this.props;
        const { container, textoLeft, textoRight } = styles;
        return (
            <TouchableWithoutFeedback onPress={() => this.props.rowPressed(id)}>
                <View>
                    <View style={container}>
                        <Text style={textoLeft}>{local}</Text>
                        <Text style={textoRight}>{visitante}</Text>
                    </View>
                    <View>
                        {this.renderDetail()}
                    </View>
                </View>
            </TouchableWithoutFeedback>

        );
    }
}

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
    apuestaContainer: {
        borderWidth: 1,
        borderColor: '#aeaeae',
        padding: 5
    },
    inputStyle: {
        width: '35%'
    },
    inputsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textoIntroduce: {
        paddingTop: 5,
        paddingBottom: 15
    }
};

const mapStateToProps = state => {
    return {
        rowSelected: state.apuestas.rowSelected,
        apuestaLocal: state.apuestas.apuestaLocal,
        apuestaVisitante: state.apuestas.apuestaVisitante,
        loadingApuesta: state.apuestas.loadingApuesta,
        pendientes: state.apuestas.proximosEncuentros,
        apostados: state.apuestas.apostados
    };
};

export default connect(mapStateToProps,
    { rowPressed, apuestaLocalChanged, apuestaVisitanteChanged, apostar })(Fila);
