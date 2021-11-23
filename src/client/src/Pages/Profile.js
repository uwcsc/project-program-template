import React from "react";
import NavBar from "../components/NavBar";

let userid = "Test-name";

function Profile(){
  return(
    <div>
      <h1>Welcome {userid}</h1>
    </div>
  );
}

export default Profile;