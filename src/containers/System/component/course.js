import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../../store/actions";
import { ThemeProvider } from 'react-bootstrap';
import '../component/menu.scss'
import Carousel from 'react-bootstrap/Carousel';
import jscore from '../../../assets/images/jsts.png'
import nodejs from '../../../assets/images/Nodejs.png'


class Course extends Component {

    constructor(props) {
        super(props);
        this.state = {
            all: [
                { image: jscore, text: "Javascript core", a: '/system/js' },
                { image: nodejs, text: "Nodejs", a: '/system/login' },
            ],
        }
    }

    render() {
        return (
            <ThemeProvider>
                    <div className="container_child_homepage">
                        <p className='updated_annoucement'>Course (new)</p>
                        <Carousel>
                            <Carousel.Item className="carousel">
                                <div className="grid_book">
                                    <a href='/system/js' className='grid_item_book'>
                                        <img className='img_book_grid' src={jscore} alt="img" />
                                        <p className="text_book_grid">Javascript core</p>
                                    </a>
                                    <div className='grid_item_book'>
                                        <img className='img_book_grid' src={nodejs} alt="img" />
                                        <p className="text_book_grid">Nodejs</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>


                    <div className='container_child_homepage'><div className="grid_book">
                        {this.state.all.map((key, index) => {
                            return (

                                <a href={key.a} key={index} className='grid_item_book'>
                                    <img src={key.image} alt="img" className="img_book_grid" />
                                    <p className="text_book_grid">{key.text}</p>
                                </a>
                            );
                        })} 
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

export default connect(mapStateToProps, mapDispatchToProps)(Course);
