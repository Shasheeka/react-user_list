import React, { Component } from 'react';

class UserForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name : '',
            email : '',
            password : '',
            error : '',
        }
    }

    onInputChange = (event) => {

        if(event.target.name === 'name') {
            this.setState({name  : event.target.value})
        }
        if(event.target.name === 'email') {
            this.setState({email  : event.target.value})
        }
        if(event.target.name === 'password') {
            this.setState({password  : event.target.value})
        }

    }

    submitUser = (e) => {
        e.preventDefault();

        if(this.state.name !== '' && this.state.email !== '' && this.state.password !== '' ) {
            const data = {
                name : this.state.name,
                email : this.state.email,
                password : this.state.password
            }

            this.props.createUser(data);
        } else {
            this.setState({error : 'Please complete the form.'})
        }

    }


    render() {
        return (
            <div className="sign-in-form">
            <div className="container">
                <form className="form-sign-in">
                    <h2 className="heading">Add Users</h2>
                    <hr/>
                    <div className="form-group">
                        <label>User Name</label>
                        <input className="form-control" type="text" name="name"  onChange={this.onInputChange} value={this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="text" name="email" onChange={this.onInputChange} value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" name="password"  onChange={this.onInputChange} value={this.state.password}  />
                    </div>
                    <div>
                        {this.state.error}
                    </div>

                    <button onClick={this.submitUser}> Submit </button>

                </form>

            </div>
            </div>
        )
    }
}

export default UserForm;