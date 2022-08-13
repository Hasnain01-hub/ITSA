import React from 'react'
import './team.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
AOS.init();
const CoreTeam = () => {
  return (
    <>
    <div class="container1">
        <center><h2>Core Team 2022-2023</h2></center>
    <div class="card-wrapper">
      
      <div class="card" data-aos="zoom-in">
        
        <div class="card-image">
          <img src="https://image.ibb.co/dUTfmJ/profile_img.jpg" alt="profile one"/>
        </div>

      <ul class="social-icons">
        {/* <li>
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li> */}
        <li>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        {/* <li>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
        </li> */}
        <li>
          <a href="">
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>

      <div class="details">
        <h2>John Smith
          <br/>
          <span class="job-title">UI Developer</span>
        </h2>
      </div>
    </div>
  </div>
    
    </div>

    </>
  )
}

export default CoreTeam