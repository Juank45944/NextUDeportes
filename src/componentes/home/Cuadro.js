import React from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Cuadro = ({ size, name, color, label, addStyleCont, addStyleLabel, onPress }) => {
    const { container, labelStyle } = styles;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[container, addStyleCont]}>
                <Icon
                    size={size}
                    name={name}
                    color={color}
                />
                <Text style={[labelStyle, addStyleLabel]}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = {
    container: {
        borderWidth: 2,
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '48%',
        marginTop: 10
    },
    labelStyle: {
        fontSize: 15
    }
};

export default Cuadro;
