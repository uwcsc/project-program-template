import axios from 'axios';
import React, {Component} from 'react';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
        };
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
        }
        axios
        .post("http://localhost:5000/Register", user)
        .then((res) => {console.log(res.data)});
        this.setState({
            username: "",
            password: "",
            email: "",
        });
    }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="username">Username: </label>
                <input onChange={this.onChangeUsername} type="text" id="username"/>
                <br />
                <label htmlFor="password">Password: </label>
                <input onChange={this.onChangePassword} type="password" id="password" />
                <br />
                <label htmlFor="email">Email: </label>
                <input onChange={this.onChangeEmail} type="text" id="email"/>
                <br />
                <input type="submit" value="Register" />
            </form>
        )
    }
} 
