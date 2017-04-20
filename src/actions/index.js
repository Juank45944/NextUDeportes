import request from 'superagent';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const getResultadosFutbolEspaña = () => {
    return (dispatch) => {
        request
            .get('https://deportes-bdf07.firebaseio.com/Futbol/España.json')
            .end((err, res) => {
                dispatch({
                    type: 'getResultadosFutbolEspaña',
                    payload: JSON.parse(res.text)
                });
            });
    };
};

export const getResultadosFutbolInglaterra = () => {
    return (dispatch) => {
        request
            .get('https://deportes-bdf07.firebaseio.com/Futbol/Inglaterra.json')
            .end((err, res) => {
                dispatch({
                    type: 'getResultadosFutbolInglaterra',
                    payload: JSON.parse(res.text)
                });
            });
    };
};

export const getResultadosBaloncesto = () => {
    return (dispatch) => {
        request
            .get('https://deportes-bdf07.firebaseio.com/Baloncesto/Estados+Unidos.json')
            .end((err, res) => {
                dispatch({
                    type: 'getResultadosBaloncesto',
                    payload: JSON.parse(res.text)
                });
            });
    };
};

export const emailChanged = (texto) => {
    return {
        type: 'userChanged',
        payload: texto
    };
};

export const passwordChanged = (texto) => {
    return {
        type: 'passwordChanged',
        payload: texto
    };
};

export const loginUser = (email, password) => {
    return (dispatch) => {
        dispatch({ type: 'logging' });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginSuccess(dispatch, user))
            .catch(() => loginError(dispatch));
    };
};

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: 'userLogged',
        payload: user
    });
    Actions.first();
};

const loginError = (dispatch) => {
    dispatch({
        type: 'logError',
        payload: 'Error en el inicio de sesión'
    });
};

export const logOut = () => {
    return (dispatch) => {
        firebase.auth().signOut()
            .then(() => logOutUser(dispatch));
    };
};

const logOutUser = (dispatch) => {
    dispatch({
        type: 'loggedOut'
    });
    Actions.auth();
};

export const getProximosEncuentros = () => {
    return (dispatch) => {
        request
            .get('https://deportes-bdf07.firebaseio.com/Proximos_encuentros.json')
            .end((err, res) => {
                dispatch({
                    type: 'getProximosEncuentros',
                    payload: JSON.parse(res.text)
                });
            });
    };
};

export const rowPressed = (id) => {
    return {
        type: 'rowSelected',
        payload: id
    };
};

export const apuestaLocalChanged = (texto) => {
    return {
        type: 'apuestaLocal',
        payload: texto
    };
};

export const apuestaVisitanteChanged = (texto) => {
    return {
        type: 'apuestaVisitante',
        payload: texto
    };
};

export const apostar = (apuestaLocal, apuestaVisitante, id, pendientes, apostados) => {
    return (dispatch) => {
        dispatch({ type: 'loadingApuesta' });
        const data = addApuestaDatos(apuestaLocal, apuestaVisitante, id, pendientes);
        apostados.push(id);
        request.put('https://deportes-bdf07.firebaseio.com/Proximos_encuentros.json')
            .send(data)
            .end(() => {
                dispatch({
                    type: 'apuestaSuccess',
                    payload: apostados
                });
            });
    };
};

const addApuestaDatos = (apuestaLocal, apuestaVisitante, id, pendientes) => {
    const datos = pendientes;
    for (const i in datos) {
        if (datos[i].id === id) {
            datos[i].apuestaLocal = apuestaLocal;
            datos[i].apuestaVisitante = apuestaVisitante;
        }
    }
    return datos;
};
