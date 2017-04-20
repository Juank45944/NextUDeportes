import { combineReducers } from 'redux';
import resultadosReducer from './resultadosReducer';
import loginFormReducer from './loginFormReducer';
import apuestasReducer from './apuestasReducer';

export default combineReducers({
    resultados: resultadosReducer,
    auth: loginFormReducer,
    apuestas: apuestasReducer
});
