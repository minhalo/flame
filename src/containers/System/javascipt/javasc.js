import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import { ThemeProvider } from 'react-bootstrap';
import './javasc.scss'

class Javasc extends Component {

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
                <div className='container_js'>
                    <div className='col1'>
                        <div className='learning'>
                        </div>
                    </div>
                    <div className='col2'>
                        <div className='menu_doc'>
                            <a className='a_doc' href='/system/home'>Home</a>

                        </div>
                        <div className='doc'>
                            
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Javasc);
