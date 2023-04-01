import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: 'withEric',
            isShowHidePassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername = (event)=> {
        this.setState({
            username: event.target.value
        })
    }

    handleOnChangePassword = (event)=> {
        this.setState({
            password: event.target.value
        })
    }

    handleLogin = async ()=> {
        // console.log('All state: ', this.state)
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
            }
        } catch(e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
            console.log('hoidanit', e.response)
        }
    }

    handleShowHidePassword = ()=> {
        this.setState({
            isShowHidePassword: !this.state.isShowHidePassword
        })
    }

    render() {
        return (
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content">
                        <div className="col-12 text-login">Login</div>
                        <div className="col-12 social-login">
                            <a href="">
                                <i className="fab fa-facebook social-icon fb"></i>
                                <span>Sign up with Facebook</span>
                            </a>
                        </div>
                        <div className="gach col-12"></div>
                        <div className="col-12 form-group login-input">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Enter your name"
                                onChange={(event)=> this.handleOnChangeUsername(event)}
                            />
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <div className="login-password">
                                <input className="form-control" placeholder="Enter your password"
                                    type={this.state.isShowHidePassword ? 'text': 'password'}
                                    onChange={(event)=> this.handleOnChangePassword(event)}
                                />
                                <span onClick={()=> this.handleShowHidePassword()}>
                                    <i className={this.state.isShowHidePassword ? 'fas fa-eye show-password': 'fas fa-eye-slash show-password'}></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 text-danger">
                            {this.state.errMessage}
                        </div>
                        <div className="col-12">
                            <button className="btn-login"
                                onClick={(event)=> this.handleLogin(event)}
                            >Login</button>
                        </div>
                        <div className="col-12 forgotpass">
                            <span><a href="">Forgot Password?</a></span>
                        </div>
                        <div className="gach col-12"></div>
                        <div className="create-account">
                            <span>Don't have an account</span> <br/>
                            <span><a href="">Sign up</a></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };


};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
