import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './Specialty.scss' 

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import specialtyImg from '../../../assets/images/specailty/co-xuong-khop.jpg'
import demo from '../../../assets/images/specailty/6798460.jpg'


class Specialty extends Component {
    render() {
        let settings = this.props.settings;
        return (
            <div className="section-share section-specicalty">
                <div className="section-container">
                    <div className="section-header">
                        <h3 className="title">Chuyên khoa phổ biến</h3>
                        <button className="btn-more">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...settings}>
                            <div className="img-customize">
                                <div className="bg-image">
                                    <img src={demo} />
                                </div>
                                <div>Cơ xương khớp 1</div>
                            </div>
                            <div className="img-customize">
                                <div className="bg-image">
                                    <img src={specialtyImg} />
                                </div>
                                <div>Cơ xương khớp 2</div>
                            </div>
                            <div className="img-customize">
                                <div className="bg-image">
                                    <img src={specialtyImg} />
                                </div>
                                <div>Cơ xương khớp 3</div>
                            </div>
                            <div className="img-customize">
                                <div className="bg-image">
                                    <img src={specialtyImg} />
                                </div>
                                <div>Cơ xương khớp 4</div>
                            </div>
                            <div className="img-customize">
                                <div className="bg-image">
                                    <img src={specialtyImg} />
                                </div>
                                <div>Cơ xương khớp 5</div>
                            </div>
                            <div className="img-customize">
                                <div className="bg-image">
                                    <img src={specialtyImg} />
                                </div>
                                <div>Cơ xương khớp 6</div>
                            </div>
                        </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
