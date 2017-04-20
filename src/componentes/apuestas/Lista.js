import React, { Component } from 'react';
import { ListView } from 'react-native';
import Fila from './Fila';

class Lista extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.resultados);
    }
    mostrarFila(item) {
        return (
            <Fila
                local={item.local}
                visitante={item.visitante}
                resultado={item.resultado}
                id={item.id}
            />
        );
    }
    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.mostrarFila}
            />
        );
    }
}

export default Lista;

