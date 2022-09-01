import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import { ThemeProvider } from 'react-bootstrap';
import '../component/menu.scss'
import Course from './course';
import Announcement from './announcement';
import Footer from './footer';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            setHome: 0,
        }

    }

    sethomebtn = () => {
        this.setState({
            setHome: 0
        })
    }

    setCoursebtn = () => {
        this.setState({
            setHome: 1
        })
    }

    logout = () => {
        this.props.processLogout()
    }



    render() {
        return (
            <ThemeProvider>
                <a className='test' href='#top'> <i className="fa fa-arrow-up arrow_top" aria-hidden="true"></i> </a>
                <div className='container_homepage'>
                    <div id="top" className='header_homepage'>
                        <p>ok</p>
                    </div>
                    <div className='menu_homepage'>
                        <p className='grid_item' onClick={() => this.sethomebtn()}>Home</p>
                        <p className='grid_item' onClick={() => this.setCoursebtn()}>Course</p>
                        <p className='grid_item' onClick={() => this.logout()}>Log out</p>
                    </div>
                    {this.state.setHome === 0 && <Announcement/>}
                    {this.state.setHome === 1 && <Course/>}
                    <Footer/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
