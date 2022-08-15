import React from "react";
import "./team.css";
const CoreTeam = () => {
  const data=[1,2,3,4,4,5,6,7]
  return (
    <>
      <div class="container1">
        <center>
          <h2>Core Team 2022-2023</h2>
        </center>
        <br/>
        <div class="topspace card-wrapper">
          {data.map((item,index)=>(
          <div class="teamcard" >
            <div class="card-imageteam">
              <img
                src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                alt="profile one"
              />
            </div>

            <ul class="social-icons">
              <li>
                <a href="#">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>

            <div class="details">
              <h2>
                John Smith
                <br />
                <span class="job-title">UI Developer</span>
              </h2>
            </div>
          </div>
          
          ))}
        </div>
        
      </div>
    </>
  );
};

export default CoreTeam;
