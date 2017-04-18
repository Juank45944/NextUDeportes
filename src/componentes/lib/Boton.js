import React from 'react';
import { TouchableOpacity } from 'react-native';

const Boton = ({ onPress, children, addStyle }) => {
    const { contenedorStyle } = styles;
    return (
        <TouchableOpacity style={[contenedorStyle, addStyle]} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
};

const styles = {
    contenedorStyle: {
        height: 40,
        alignSelf: 'stretch',
        backgroundColor: '#82e71b',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#375311',
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Boton };

