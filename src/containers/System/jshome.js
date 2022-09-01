import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../System/UserManage.scss'
import * as actions from "../../store/actions";
import { ThemeProvider } from 'react-bootstrap';
import Javasc from './javascipt/javasc';

class Jshome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
      
    }

    logout = () => {
        this.props.processLogout()
    }

    
    render() {
        return (
            <ThemeProvider> 
                <Javasc/>
            </ThemeProvider>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jshome);
