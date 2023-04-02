import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss'
import bannner from '../../../src/assets/images/banner.jpg';
import logo from '../../../src/assets/images/logo.svg';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {
    changeLanguage = (language)=> {
        this.props.changeLanguageAppRedux(language)
    }

    render() {
        console.log('Check props: ', this.props)
        let language = this.props.language
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <i className="fas fa-bars"></i>
                            <div className="header-logo">
                                <img src={logo} />
                            </div>
                        </div>
                        <div className="center-content">
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.speciality"/></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.searchdoctor"/></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.health-facility"/></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.select-room"/></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.doctor"/></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.select-doctor"/></div>
                            </div>
                            <div className="child-content">
                                <div><b><FormattedMessage id="home-header.fee"/></b></div>
                                <div className="subs-title"><FormattedMessage id="home-header.check-health"/></div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="support">
                                <i className="fas fa-question-circle"></i><FormattedMessage id="home-header.support"/>  
                            </div>
                            <div className={language === LANGUAGES.VI? 'language-vi active': 'language-en'}><span onClick={()=> this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN? 'language-en active': 'language-en'}><span onClick={()=> this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="img-banner"><img src={bannner} alt="banner"/></div>
                    <div className="opacity-div"></div>
                    <div className="title1"><FormattedMessage id="banner.title1"/></div>
                    <div className="title2"><FormattedMessage id="banner.title2"/></div>
                    <div className="search">
                        <div className="search-form">
                            <i className="fas fa-search"></i>
                            <input type="text" placeholder="Tìm chuyên khoa"/>
                        </div>
                    </div>
                    <div className="options">
                    <div className="options-child">
                            <div className="icon-child"><i className="fas fa-hospital"></i></div>
                            <div className="text-child"><FormattedMessage id="banner.child1"/></div>
                        </div>
                        <div className="options-child">
                            <div className="icon-child"><i className="fas fa-mobile-alt"></i></div>
                            <div className="text-child"><FormattedMessage id="banner.child2"/></div>
                        </div>
                        <div className="options-child">
                            <div className="icon-child"><i className="fas fa-flask"></i></div>
                            <div className="text-child"><FormattedMessage id="banner.child3"/></div>
                        </div>
                        <div className="options-child">
                            <div className="icon-child"><i className="fas fa-user-md"></i></div>
                            <div className="text-child"><FormattedMessage id="banner.child4"/></div>
                        </div>
                        
                        <div className="options-child">
                            <div className="icon-child"><i className="fas fa-user-md"></i></div>
                            <div className="text-child"><FormattedMessage id="banner.child5"/></div>
                        </div>
                        <div className="options-child">
                            <div className="icon-child"><i className="fas fa-user-md"></i></div>
                            <div className="text-child"><FormattedMessage id="banner.child6"/></div>
                        </div>
                        <div className="options-child">
                            <div className="icon-child"><i className="fas fa-hospital"></i></div>
                            <div className="text-child"><FormattedMessage id="banner.child7"/></div>
                        </div>
                        <div className="options-child">
                            <div className="icon-child"><i className="fas fa-hospital"></i></div>
                            <div className="text-child"><FormattedMessage id="banner.child8"/></div>
                        </div>
                        <div className="options-child">
                            <div className="icon-child"><i className="fas fa-hospital"></i></div>
                            <div className="text-child">
                                <FormattedMessage id="banner.child9"/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
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
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
