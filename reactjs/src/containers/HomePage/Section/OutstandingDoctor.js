import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import avatarDoctor from '../../../assets/images/outstanding-doctor/avatar.png'

class OutstandingDoctor extends Component {
    render() {
        let settings = this.props.settings;
        return (
            <div className="section-share section-outstanding-doctor">
                <div className="section-container">
                    <div className="section-header">
                        <h3 className="title">Cở sở y tế nổi bật</h3>
                        <button className="btn-more">Xem thêm</button>
                    </div>
                    <div className="section-body">
                        <Slider {...settings}>
                            <div className="img-customize doctor">
                                <div className="padding">
                                    <div className="bg-image outstanding-doctor">
                                        <img src={avatarDoctor} />
                                    </div>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp</div>
                                    <div>Nguyễn Duy Hưng</div>
                                    <div className="chuyenkhoa">Da liễu</div>
                                </div>
                            </div>
                            <div className="img-customize doctor">
                                <div className="padding">
                                    <div className="bg-image outstanding-doctor">
                                        <img src={avatarDoctor} />
                                    </div>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp</div>
                                    <div>Nguyễn Duy Hưng</div>
                                    <div className="chuyenkhoa">Da liễu</div>
                                </div>
                            </div>
                            <div className="img-customize doctor">
                                <div className="padding">
                                    <div className="bg-image outstanding-doctor">
                                        <img src={avatarDoctor} />
                                    </div>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp</div>
                                    <div>Nguyễn Duy Hưng</div>
                                    <div className="chuyenkhoa">Da liễu</div>
                                </div>
                            </div>
                            <div className="img-customize doctor">
                                <div className="padding">
                                    <div className="bg-image outstanding-doctor">
                                        <img src={avatarDoctor} />
                                    </div>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp</div>
                                    <div>Nguyễn Duy Hưng</div>
                                    <div className="chuyenkhoa">Da liễu</div>
                                </div>
                            </div>
                            <div className="img-customize doctor">
                                <div className="padding">
                                    <div className="bg-image outstanding-doctor">
                                        <img src={avatarDoctor} />
                                    </div>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp</div>
                                    <div>Nguyễn Duy Hưng</div>
                                    <div className="chuyenkhoa">Da liễu</div>
                                </div>
                            </div>
                            <div className="img-customize doctor">
                                <div className="padding">
                                    <div className="bg-image outstanding-doctor">
                                        <img src={avatarDoctor} />
                                    </div>
                                    <div>Phó Giáo sư, Tiến sĩ, Bác sĩ cao cấp</div>
                                    <div>Nguyễn Duy Hưng</div>
                                    <div className="chuyenkhoa">Da liễu</div>
                                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
