import React from "react";
import NavBar from "../components/NavBar";

let userid = "Test-name";

function Profile(){
  return(
    <div>
      <NavBar />
      <h1>Welcome {userid}</h1>
    </div>
  );
}

export default Profile;