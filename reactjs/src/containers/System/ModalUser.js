import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import './ModalUser.scss'

class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phonenumber: ''
        }

        this.listenToEmitter()
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            this.setState({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                address: '',
                phonenumber: ''
            })
        })
    }

    componentDidMount() {
        // console.log('Mouting modal')
    }

    toggle = ()=> {
        this.props.toggleFormParent()
    }

    handleOnChangeInput = (event, id)=> {
        let copyState = {...this.state }
        copyState[id] = event.target.value
        this.setState({
            ...copyState
        })
    } 

    checkValidate = ()=> {
        let isValid = true
        let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phonenumber']
        for (let i=0;i<arrInput.length;i++) {
            // console.log(this.state[arrInput[i]])
            if (!this.state[arrInput[i]]) {
                isValid = false
                alert('Missing parameter: ' + arrInput[i])
                break
            }
        }
        return isValid
    }

    handleAddNewUser = ()=> {
        let isValid = this.checkValidate()
        if (isValid === true) {
            // call api create modal
            this.props.createNewUser(this.state)
        }
    }

    render() {
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle={()=> { this.toggle()}} 
                className={'abc'}
                size="lg"
                centered
            >
                <ModalHeader toggle={()=> { this.toggle()}}>Create a new user</ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 form-group login-input">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter your name"
                                    onChange={(event)=> {this.handleOnChangeInput(event, "email")}}
                                    value={this.state.email}
                                />
                            </div>
                            <div className="col-6 form-group login-input">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter your password"
                                    onChange={(event)=> this.handleOnChangeInput(event, "password")}
                                    value={this.state.password}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 form-group login-input">
                                <label>Firstname</label>
                                <input type="text" className="form-control" placeholder="Enter your first name"
                                    onChange={(event)=> this.handleOnChangeInput(event, "firstName")}
                                    value={this.state.firstName}
                                />
                            </div>
                            <div className="col-6 form-group login-input">
                                <label>Lastname</label>
                                <input type="text" className="form-control" placeholder="Enter your last name"
                                    onChange={(event)=> this.handleOnChangeInput(event, "lastName")}
                                    value={this.state.lastName}
                                />
                            </div>
                        </div>
                        <div className="col-12 form-group login-input">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Enter your address"
                                    onChange={(event)=> this.handleOnChangeInput(event, "address")}
                                    value={this.state.address}
                            />
                        </div>
                        <div className="row">
                            <div className="col-6 form-group login-input">
                                <label>Phone number</label>
                                <input type="text" className="form-control" placeholder="Enter your phone number"
                                    onChange={(event)=> this.handleOnChangeInput(event, "phonenumber")}
                                    value={this.state.phonenumber}
                                />
                            </div>
                            {/* <div className="col-3 form-group login-input">
                                <label for="inputState">Sex</label>
                                <select name="gender" class="form-control">
                                    <option value="1">Male</option>
                                    <option value="0">Female</option>
                                </select>
                            </div>
                            <div className="col-3 form-group login-input">
                                <label for="inputZip">Role</label>
                                <select name="roleId" class="form-control">
                                    <option value="1">Admin</option>
                                    <option value="2">Doctor</option>
                                    <option value="3">Patient</option>
                                </select>
                            </div> */}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary"  className="btn-cus"
                        onClick={()=> {this.handleAddNewUser()}}
                    >
                        Add new
                    </Button>{' '}
                    <Button color="secondary" onClick={()=> {this.toggle()}} className="btn-cus">
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
