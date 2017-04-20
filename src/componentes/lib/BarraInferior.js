import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const BarraInferior = () => {
    const { contenedor, item } = styles;
    return (
        <View style={contenedor}>
            <TouchableOpacity style={item} onPress={() => Actions.first()}>
                <Icon name='ios-home' size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.futbol()}>
                <Icon name='ios-football' size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.baloncesto()}>
                <Icon name='ios-basketball' size={25} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={item} onPress={() => Actions.apuestas()}>
                <Icon name='ios-cash' size={25} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    contenedor: {
        height: 47,
        backgroundColor: '#000',
        flexDirection: 'row'
    },
    item: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: '#fff'
    }
};

export { BarraInferior };
