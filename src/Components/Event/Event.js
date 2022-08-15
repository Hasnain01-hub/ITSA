import React, { useEffect, useState } from 'react'
import './event.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { db } from '../../Firebase';
const cloudinary = require('cloudinary/lib/cloudinary');
AOS.init();
const Event = () => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  useEffect(() => {
    loadAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const loadAllServices = async () => {
    setLoading(true);
    // getServices("price", "desc", page)
    const items = await db.collection('events')
      // .where('uid', '==', user.email)
      // .doc()
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(element => {
          var data = element.data();
          setData(arr => [...arr, data]);
        });
        setLoading(false);
      });
  };
  // const handleRemove = async () => {
  //   if (window.confirm("Are you sure want to delete this item?")) {
  //     try {
  //       await db.collection('items')
  //         // .where('uid', '==', user.email)
  //         .doc(brand)
  //         .delete().then(() => {
  //           console.log("Image is here", image)

  //           image.map((image1) => {
  //             console.log("Image is here", image1.public_id)
  //             var image_id = image1.public_id;
  //             cloudinary.uploader.destroy(image_id, (err, result) => {
  //               if (err) return
  //               // alert( err );
  //               alert("ok");
  //             })
  //           })


  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //       window.location.reload()

  //     } catch (err) {
  //       console.error(err);
  //       alert(err.message);
  //     }
  //   }
  // };
  return (
    <>
    {console.log(Data)}
    <div className='container box'>
        {Data.map((item) => (
          <div data-aos="zoom-in" className="product-box">
            <div className="product">
              <span className="product__price">{item.date}</span>
              <img className="product__image" src={item.image[0].url} alt='Images' />
              <h1 className="product__title">{item.event}</h1>
              <hr />
              <p>Speaker: {item.speaker}</p>
              <p>venue: {item.venue}</p>
              
              {/* <a href="#" className="product__bttn btn1">View more</a> */}
            </div>
          </div>
          
        ))} 
      </div>

      
    </>
  )
}

export default Event