import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import '../component/menu.scss'


class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }


    render() {
        return (
            <div className='container_footer'>
                <div className='footer'>
                    <p>
                        <a href='#social'><i className="fa fa fa-users" aria-hidden="true"></i> </a>
                    </p>
                    <p>No copyright @2022</p>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
