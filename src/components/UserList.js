import React, { Component } from 'react';

class UserList extends Component{

    deleteUser = (userId) => {
        this.props.deleteUser(userId);
    }

    render() {
        return (
            <div className="sign-in-form">
                <div className="container form-sign-in" >
                    <h2 className="heading">User List</h2>
                    {this.props.userList.length > 0 ?
                        <div>
                            <ul>
                                {this.props.userList.map((user) => {
                                    return <li className="form-control" key={'ul_'+user.id}>
                                               <label>{user.name}</label>
                                               <button  className="delete-btn" onClick={() => {this.deleteUser(user.id)}}>Delete</button>
                                            </li>
                                })

                                }
                            </ul>
                        </div>
                        :
                        <div>
                            Please add users to view here.
                        </div>
                    }
                </div>
            </div>


        );
    }
}

export default UserList;