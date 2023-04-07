import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatarDoctor from '../../../assets/images/outstanding-doctor/avatar.png'

class About extends Component {
    render() {
        return (
            <div className="section-share section-about">
                <div className="section-container">
                    <div className="section-header">
                        <h3 className="title">Truyền thông nói về BookingCare</h3>
                    </div>
                    <div className="section-youtube">
                        <div className="row">
                            <div className="col-6">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/FyDQljKtWnI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                            <div className="col-6">
                                <h3 className="title">
                                Truyền thông nói về BookingCare
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
