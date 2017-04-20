import { Router, Scene, Actions } from 'react-native-router-flux';
import React from 'react';
import LoginMain from './componentes/login/Main';
import LogOut from './componentes/login/Logout';
import HomeMain from './componentes/home/Main';
import FutbolMain from './componentes/futbol/Main';
import BaloncestoMain from './componentes/baloncesto/Main';
import ApuestasMain from './componentes/apuestas/Main';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="auth">
                <Scene
                    hideNavBar
                    key="login"
                    component={LoginMain}
                />
            </Scene>
            <Scene key="logOut">
                <Scene
                    hideNavBar
                    key="logOutMain"
                    component={LogOut}
                />
            </Scene>
            <Scene key="first">
                <Scene
                    title="Inicio"
                    key="home"
                    component={HomeMain}
                    rightTitle="Cerrar sesión"
                    onRight={() => Actions.logOut()}
                />
            </Scene>
            <Scene key="futbol">
                <Scene
                    title="Fútbol"
                    key="futbolHome"
                    component={FutbolMain}
                    rightTitle="Cerrar sesión"
                    onRight={() => Actions.logOut()}
                />
            </Scene>
            <Scene key="baloncesto">
                <Scene
                    title="Baloncesto"
                    key="baloncestoHome"
                    component={BaloncestoMain}
                    rightTitle="Cerrar sesión"
                    onRight={() => Actions.logOut()}
                />
            </Scene>
            <Scene key="apuestas" initial>
                <Scene
                    title="Apuestas"
                    key="apuestasHome"
                    component={ApuestasMain}
                    rightTitle="Cerrar sesión"
                    onRight={() => Actions.logOut()}
                />
            </Scene>
        </Router>
    );
};

const styles = {
    homeButton: {
        height: 16, 
        width: 16, 
        paddingTop: 20, 
        paddingLeft: 10
    }
}

export default RouterComponent;
