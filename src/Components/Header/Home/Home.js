import React from 'react'
import './home.css'
import Lottie from "lottie-react";
import backg from "../././../../Images/backg.json";
// import back from "../././../../Images/backgorund.gif";
const Home = () => {
    
    return (
    <>
        
    <div className='block'>
    <div className='custum '>
    <Lottie animationData={backg}  loop={true} />
          </div>  
            
        {/* <img className='custum ' src={}/> */}
        <div className="container h-100 ">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 py-3 wow fadeInUp topc ">
              <h1 className="mb-4 capitalize bold">INFORMATION TECHNOLOGY STUDENT ASSOCIATION</h1>
              <p className="text-lg mb-5 space">
                The ITSA is a student organization of the VIT, Mumbai.
              </p>

              {/* <a href="#" className="text-secondary  btn-outline border btn ">
                More Info
              </a>
              <a href="#" className="btn btn-primary btn-split ml-2">
                Watch Video{" "}
                <div className="fab">
                  <span className="mai-play"></span>
                </div>
              </a> */}
            </div>
            <div className="col-lg-6 py-3 wow zoomIn">
              <div className="img-place">
                {/* <img src={bg1} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Home