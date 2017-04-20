export default (state = {}, action) => {
    switch (action.type) {
        case 'getResultadosFutbolEspaña':
            return { ...state, futbolEspana: action.payload };
        case 'getResultadosFutbolInglaterra':
            return { ...state, futbolInglaterra: action.payload };
        case 'getResultadosBaloncesto':
            return { ...state, baloncestoUsa: action.payload };
        default:
            return state;
    }
};
