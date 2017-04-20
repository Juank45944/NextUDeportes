import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getResultadosBaloncesto } from '../../actions';
import { Lista, BarraInferior } from '../lib';
import TituloSeccion from './TituloSeccion';

class Main extends Component {
    componentWillMount() {
        this.props.getResultadosBaloncesto();
    }
    renderList() {
        if (this.props.dataBaloncestoUsa) {
            return (
                <View style={{ padding: 20, paddingTop: 70 }}>
                    <TituloSeccion
                        nombre='Estados Unidos'
                    />
                    <Lista
                        resultados={this.props.dataBaloncestoUsa}
                    />
                </View>
            );
        }
        return <View />;
    }
    render() {
        return (
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                { this.renderList() }
                <BarraInferior />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        dataBaloncestoUsa: state.resultados.baloncestoUsa
    };
};

export default connect(
    mapStateToProps,
    { getResultadosBaloncesto })(Main);

