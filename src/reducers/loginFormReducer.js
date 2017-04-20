export default (state = {}, action) => {
    switch (action.type) {
        case 'userChanged':
            return { ...state, email: action.payload };
        case 'passwordChanged':
            return { ...state, password: action.payload };
        case 'userLogged':
            return { ...state, user: action.payload, errorMsg: '', email: '', password: '', loading: false };
        case 'logError':
            return { ...state, errorMsg: action.payload, password: '', loading: false };
        case 'logging':
            return { ...state, errorMsg: '', loading: true };
        case 'loggedOut':
            return { ...state, user: null };
        default:
            return state;
    }
};
