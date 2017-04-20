export default (state = {}, action) => {
    switch (action.type) {
        case 'getProximosEncuentros':
            return { ...state, proximosEncuentros: action.payload, apostados: [''] };
        case 'rowSelected':
            return { ...state, rowSelected: action.payload };
        case 'apuestaLocal':
            return { ...state, apuestaLocal: action.payload };
        case 'apuestaVisitante':
            return { ...state, apuestaVisitante: action.payload };
        case 'loadingApuesta':
            return { ...state, loadingApuesta: true };
        case 'apuestaSuccess':
            return { ...state,
                    loadingApuesta: false,
                    apuestaLocal: '',
                    apuestaVisitante: '',
                    apostados: action.payload };
        default:
            return state;
    }
};
