import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService'
import ModalUser from './ModalUser';
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';
import './Usermanage.scss'
class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModaEditlUser: false
        }
        userEdit: {}
    }

    async componentDidMount() {
        await this.getAllUsersFormReact()
    }

    getAllUsersFormReact = async ()=> {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0 ) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleAddNewUser = ()=> {
        this.setState({
            isOpenModalUser: true
        })

        emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your_id' })
    }

    toggleUserModal = ()=> {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser
        })
    } 

    toggleUserEditModal = ()=> {
        this.setState({
            isOpenModaEditlUser: !this.state.isOpenModaEditlUser
        })
    }

    createNewUser = async (data)=> {
        try {
            let response = await createNewUserService(data)
            if(response && response.errCode !== 0) {
                alert(response.errMessage)
            } else {
                await this.getAllUsersFormReact()
                this.setState({
                    isOpenModalUser: false
                })
            }
            console.log('Response: ', response)
        } catch(e) {
            console.log(e)
        }
        console.log('Check data form child: ', data)
    }

    handleDeleteUser = async (userDe)=> {
        console.log('Click delete', userDe)
        try {
            let response = await deleteUserService(userDe.id)
            if (response && response.errCode === 0) {
                await this.getAllUsersFormReact()
            } else {
                alert(response.errMessage)
            }
        } catch(e) {
            console.log(e)
        }
    }

    handleEditUser = (user)=> {
            this.setState({
            isOpenModaEditlUser: true,
            userEdit: user
        })
    }

    doEditUser = async (user) => {
        try {
            let response = await editUserService(user)
            if (response && response.errCode === 0) {
                this.setState({
                    isOpenModaEditlUser: false
                })

                this.getAllUsersFormReact()
            }
        } catch(e) {

        }
    }

    /** Life cycle
     * Run component: 
     * 1: Run constructor -> init state
     * 2: Did mount (set state)
     * 3: Render  
     * 
     */

    render() {
        let arrUsers = this.state.arrUsers
        return (
            <div className="users-container container">
                <ModalUser 
                    isOpen={this.state.isOpenModalUser}
                    toggleFormParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {
                    this.state.isOpenModaEditlUser &&
                    <ModalEditUser 
                        isOpen={this.state.isOpenModaEditlUser}
                        toggleFormParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                        // createNewUser={this.createNewUser}
                    />
                }
                <div className="title text-center">Manage users</div>
                <div className=""mx-1>
                    <button className="btn btn-primary px-3"
                        onClick={()=> this.handleAddNewUser()}
                    >
                        <i className="fas fa-plus"></i>
                        Add new user
                    </button>
                </div>
                <div className="users-table mt-3">
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Firstname</th>
                                <th>Lasttname</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                arrUsers && arrUsers.map((user, index)=> {
                                    return (
                                        <tr key={ user.id }>
                                            <td>{ user.email }</td>
                                            <td>{ user.firstName}</td>
                                            <td>{ user.lastName }</td>
                                            <td>{ user.address }</td>
                                            <td>
                                                <button className="btn-edit" onClick={()=> this.handleEditUser(user)}><i className="fas fa-pencil-alt"></i></button>
                                                <button className="btn-delete" onClick={()=> this.handleDeleteUser(user)}><i className="fas fa-trash"></i></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
