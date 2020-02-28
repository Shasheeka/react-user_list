import React, { Component } from 'react';
import axios from  'axios';
import UserForm from "./UserForm";
import UserList from "./UserList";

const API_URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:8000/api';

class UserComponent extends Component {

    state = {
        userList : [],
    }

    componentDidMount() {
        axios.get(`${API_URL}/user/get`).then( response => {
            this.setState({
                userList : response.data
            })
        })
    }

    createUser = (data) => {
        axios.post(`${API_URL}/user/create`, data).then( response => {
            this.setState({
                userList : response.data
            })
        })
    }

    deleteUser = (userId) => {
        return axios.delete(`${API_URL}/user/delete/${userId}`).then( response => {
            this.setState({
                userList : response.data
            })
        })
    }

    render() {
        return (
            <div>
                <UserForm createUser={this.createUser}/>
                <hr></hr>
                <UserList userList={this.state.userList} deleteUser={this.deleteUser} />
            </div>
        );
    }
}

export default UserComponent;