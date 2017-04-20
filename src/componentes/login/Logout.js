import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { logOut } from '../../actions';
import { Spinner } from '../lib';

class Logout extends Component {
    componentDidMount() {
        this.props.logOut();
    }
    render() {
        return (
            <View style={{ paddingTop: 300 }}>
                <Spinner size="large" />
            </View>
        );
    }
}

export default connect(null, { logOut })(Logout);
