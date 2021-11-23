import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function LoginForm({ LoginFunc, error} ){

  const [userInfo, setUserInfo] = useState({username: "", email: "", password: ""});

  const handleSubmit = e => {
    e.preventDefault();
    LoginFunc(userInfo);
  }

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="inner-form">
          <h2>Login</h2>
          {(error != "") ? (<div className="error">{error}</div> ) : "" }
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" onChange={e => setUserInfo({...userInfo, username: e.target.value})} value={userInfo.username} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" id="email" onChange={e => setUserInfo({...userInfo, email: e.target.value})} value={userInfo.email} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" id="password" onChange={e => setUserInfo({...userInfo, password: e.target.value})} value={userInfo.password} />
          </div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default LoginForm;