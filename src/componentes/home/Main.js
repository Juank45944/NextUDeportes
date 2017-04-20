import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { BarraInferior } from '../lib';
import Cuadro from './Cuadro';

class Main extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={container}>
                    <Cuadro
                        size={30}
                        name={'ios-football'}
                        color={'#375311'}
                        label={'Fútbol'}
                        addStyleCont={{ borderColor: '#375311' }}
                        addStyleLabel={{ color: '#375311' }}
                        onPress={() => Actions.futbol()}
                    />
                    <Cuadro
                        size={30}
                        name={'ios-basketball'}
                        color={'#f8740c'}
                        label={'Baloncesto'}
                        addStyleCont={{ borderColor: '#f8740c' }}
                        addStyleLabel={{ color: '#f8740c' }}
                        onPress={() => Actions.baloncesto()}
                    />
                    <Cuadro
                        size={30}
                        name={'ios-cash'}
                        color={'#1661a9'}
                        label={'Apuestas'}
                        addStyleCont={{ borderColor: '#1661a9' }}
                        addStyleLabel={{ color: '#1661a9' }}
                        onPress={() => Actions.apuestas()}
                    />
                    <Cuadro
                        size={30}
                        name={'ios-person'}
                        color={'#e0cc01'}
                        label={'Perfil'}
                        addStyleCont={{ borderColor: '#e0cc01' }}
                        addStyleLabel={{ color: '#e0cc01' }}
                        onPress={() => null}
                    />
                </View>
                <BarraInferior />
            </View>
        );
    }
}

const styles = {
    container: {
        padding: 60,
        paddingTop: 230,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
};

export default Main;
