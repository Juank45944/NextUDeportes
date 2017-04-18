import { Router, Scene } from 'react-native-router-flux';
import React from 'react';
import LoginMain from './componentes/login/Main';
import HomeMain from './componentes/home/Main';

const RouterComponent = () => {
    return (
        <Router>
            <Scene
                hideNavBar
                key="login"
                component={LoginMain}
            />
            <Scene
                title="Inicio"
                key="home"
                component={HomeMain}
                initial
            />
        </Router>
    );
};

export default RouterComponent;
