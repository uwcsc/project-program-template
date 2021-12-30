import React from "react";
import NavBar from "../../components/navbar/NavBar";
import './Home.css'

function Home(){
  return(
    <>
      <NavBar />
      <div class="header">
        <h1>Welcome to <span>Good Night Out</span></h1>
      </div>
      
    </>
  );
}

export default Home;