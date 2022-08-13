import React from 'react'
import './event.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
AOS.init();
const Event = () => {
  return (
    <>
    <div className='container box'>
        {/* {productData.map((item) => ( */}
          <div data-aos="zoom-in" className="product-box">
            <div className="product">
              <span className="product__price">Date</span>
              <img className="product__image" src="https://media.istockphoto.com/photos/table-setting-for-an-event-party-or-wedding-reception-picture-id479977238?k=20&m=479977238&s=612x612&w=0&h=6yuuuuHTvosXEGwlPTdY8V4N95issAzrTTQ9ZKN1w3E=" alt='Images' />
              <h1 className="product__title">Event Name</h1>
              <hr />
              <p>Dolor ullamco in nisi mollit enim id ullamco incididunt voluptate labore est proident. Sunt occaecat reprehenderit  </p>
              <a href="#" className="product__bttn btn1">View more</a>
            </div>
          </div>
          
        {/* ))} */}
      </div>

      
    </>
  )
}

export default Event