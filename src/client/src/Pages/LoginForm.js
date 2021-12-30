// import React from "react";
// import "./LoginForm.css";
// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Home from "./Home";
// import EventList from "./Events/EventList";

// const admin = {
//   email: "admin@admin.com",
//   username: "Admin",
//   password: "admin",
// };

// function LoginForm({ currentUser }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [user, setUser] = useState();
//   const [error, setError] = useState("");

//   /*
//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       const foundUser = JSON.parse(loggedInUser);
//       setUser(foundUser);
//       console.log(foundUser);
//     }
//   }, []);
//   */

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     localStorage.setItem("user", {
//       username: "Admin",
//       password: "admin",
//       email: "admin@admin.com",
//     });

//     setUser({ username: "Admin", password: "admin", email: "admin@admin.com" });

//     /*
//     const response = await axios.post(
//       "http://blogservice.herokuapp.com/api/login",
//       user
//     );
    
//     setUser(response.data);
//     localStorage.setItem("user", response.data);
//     console.log(response.data);
//     */
//   };

//   if (username == admin.username && password == admin.password) {
//     console.log("test");
//     return <Home />;
//   }

//   return (
//     <div className="login-form">
//       <form onSubmit={handleSubmit}>
//         <div className="inner-form">
//           <h2>Login</h2>
//           {error != "" ? <div className="error">{error}</div> : ""}
//           <div className="form-group">
//             <label htmlFor="username">Username: </label>
//             <input
//               type="text"
//               value={username}
//               placeholder="enter a username"
//               onChange={({ target }) => setUsername(target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email: </label>
//             <input
//               type="email"
//               value={email}
//               placeholder="email"
//               onChange={({ target }) => setEmail(target.value)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password: </label>
//             <input
//               type="password"
//               value={password}
//               placeholder="password"
//               onChange={({ target }) => setPassword(target.value)}
//             />
//           </div>
//           <input type="submit" value="Login" />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
