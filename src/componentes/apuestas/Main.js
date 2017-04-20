import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { getProximosEncuentros } from '../../actions';
import { BarraInferior } from '../lib';
import Lista from './Lista';

class Main extends Component {
    componentWillMount() {
        this.props.getProximosEncuentros();
    }
    renderList() {
        if (this.props.dataProximosEncuentros) {
            return (
                <View style={{ padding: 20, paddingTop: 80 }}>
                    <View style={{ padding: 20 }}>
                        <Text>Próximos encuentros</Text>
                    </View>

                    <Lista
                        resultados={this.props.dataProximosEncuentros}
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
        dataProximosEncuentros: state.apuestas.proximosEncuentros
    };
};

export default connect(
    mapStateToProps,
    { getProximosEncuentros })(Main);

