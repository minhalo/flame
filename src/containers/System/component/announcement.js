import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import { ThemeProvider } from 'react-bootstrap';
import '../component/menu.scss'



class Announcement extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render() {
        return (
            <ThemeProvider>
                <div className='container_child_homepage'>
                    <p className='updated_annoucement'>Update</p>
                    <ul className='list_anoucement'>
                        <li><p>Version 0.0.1</p></li>
                        <li>
                            <p>Course</p>
                            <ul>
                                <li>Javascript</li>
                                <li>Nodejs</li>
                                <li>HTML</li>
                                <li>CSS</li>
                            </ul>
                        </li>
                        <li>
                            <p>Book</p>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                            </ul>
                        </li>
                    </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(Announcement);
