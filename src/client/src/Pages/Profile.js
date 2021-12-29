import axios from "axios";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

let userid = "Test-name";

function Profile(){
  /*const [user, setUser] = useState();
  useEffect(async () => {
    const retrieved_user = 
  });*/
  /*const [user, setUser] = useState("John Doe");

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${localStorage.getItem('user')}`)
    .then(res => setUser(res));
  })*/
  return(
    <div>
      <h1>Welcome</h1>
    </div>
  );
}

export default Profile;