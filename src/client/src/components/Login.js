import React, {Component} from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: ""
    }
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log(user);
    axios
    .post("http://localhost:5000/login", user)
    .then(res => {
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
    });
    this.setState({
      username: "",
      password: "",
    });
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" onChange={this.onChangeUsername} id="username"/>
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" onChange={this.onChangePassword} id="password"/>
        <br />
        <input type="submit" value="Login"/>
      </form>
    );
  }
}