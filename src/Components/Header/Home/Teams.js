import React from "react";
import "./team.css";
const Teams = () => {
  return (
    <>
      <div class="container1">
        <center>
          <h2>Our Convener</h2>
        </center>
        <br/>
        <div class="topspace card-wrapper cuspace">
        
          <div class="teamcard">
            <div class="card-imageteam">
              <img
                src="https://image.ibb.co/dUTfmJ/profile_img.jpg"
                alt="profile one"
              />
            </div>

            <ul class="social-icons">
              <li>
                <a href="">
                  <i class="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>

            <div class="details">
              <h2>
                Name
                <br />
                <span class="job-title">Role</span>
              </h2>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Teams;
