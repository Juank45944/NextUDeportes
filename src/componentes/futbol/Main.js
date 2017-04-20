import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { getResultadosFutbolEspaña, getResultadosFutbolInglaterra } from '../../actions';
import { Lista, BarraInferior } from '../lib';
import TituloSeccion from './TituloSeccion';

class Main extends Component {
    componentWillMount() {
        this.props.getResultadosFutbolEspaña();
        this.props.getResultadosFutbolInglaterra();
    }
    renderList() {
        if (this.props.dataFutbolEspana && this.props.dataFutbolInglaterra) {
            return (
                <View style={{ padding: 20, paddingTop: 70 }}>
                    <TituloSeccion
                        nombre='Inglaterra'
                    />
                    <Lista
                        resultados={this.props.dataFutbolInglaterra}
                    />
                    <TituloSeccion
                        nombre='España'
                    />
                    <Lista
                        resultados={this.props.dataFutbolEspana}
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
        dataFutbolEspana: state.resultados.futbolEspana,
        dataFutbolInglaterra: state.resultados.futbolInglaterra
    };
};

export default connect(
    mapStateToProps,
    {
        getResultadosFutbolEspaña,
        getResultadosFutbolInglaterra
    })(Main);

