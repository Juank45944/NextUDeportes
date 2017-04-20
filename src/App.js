import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import Router from './RouterComponent';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCzQoiGKUAej_6fOB7m8IuUg2_DgAelkck',
            authDomain: 'deportes-bdf07.firebaseapp.com',
            databaseURL: 'https://deportes-bdf07.firebaseio.com',
            projectId: 'deportes-bdf07',
            storageBucket: 'deportes-bdf07.appspot.com',
            messagingSenderId: '1096509405396'
        });
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;
