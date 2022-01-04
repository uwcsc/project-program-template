import React from "react";
import NavBar from "../../components/navbar/NavBar";
import "./Home.css";

function Home() {
  return (
    <>
      <NavBar />
      <div class="home-container">
        <div class="header">
          <h1>
            Welcome to <span>Good Night Out</span>
          </h1>
        </div>
        <div class="info-block" style={{ backgroundColor: "white" }}>
          <h3>
            What is <span>Good Night Out</span>?
          </h3>
          <div className="text">
            <div>
              A social web app dedicated to helping university students
              <ul>
                <li>
                  <span>Schedule</span> and <span>plan</span> study sessions and
                  social gatherings with their friends.
                </li>
                <br />
                <li>
                  <span>Join</span> other public events to get involved in the
                  school community
                </li>
              </ul>
            </div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
