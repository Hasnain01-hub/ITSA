import React from 'react'
import './contactretrive.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';
AOS.init();
const RetriveContact = () => {
  return (
    <>
    <div className='contact'>
        <div class="boxcard red" data-aos="zoom-in">
      <div className='detail'>
      <p>Name: </p>
      <p>Mail: </p>
      <p>Contact-No: </p>
      <p>Message: </p>
      </div>
      {/* <img src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt=""/> */}
    </div>
    
    </div>
    </>
  )
}

export default RetriveContact