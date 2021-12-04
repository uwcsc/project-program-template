import React from "react";
import NavBar from "../components/NavBar";

let userid = "Test-name";

function Profile(){


  return(
    <div>
      <h1>Welcome {userid}</h1>
      <div className="Profile">
      <form onSubmit={handleSubmit}>
        <div className="inner-form">
          <h2>Login</h2>
          {error != "" ? <div className="error">{error}</div> : ""}
          <div className="form-group">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              value={username}
              placeholder="enter a username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              value={email}
              placeholder="email"
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <input type="submit" value="Login" />
        </div>
      </form>
      </div>
    </div>
  );
}

export default Profile;