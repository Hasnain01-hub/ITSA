import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import "./event.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { db } from "../../Firebase";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import { toast, ToastContainer } from "react-toastify";
const cloudinary = require("cloudinary/lib/cloudinary");
AOS.init();
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    background: "none",
    bottom: "auto",
    border: "none",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
cloudinary.config({
  cloud_name: "dx49zb3c8",
  api_key: "513967461143271",
  api_secret: "V88-_1nMkGwemX2ttTCqsRUjBi0",
});
const Event = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  const { user } = useSelector((state) => ({ ...state }));

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }
  var id = uuidv4();
  const [loading, setLoading] = useState(false);
  const [phone, setphone] = useState("");
  const [event, setevent] = useState("");
  const [Data, setData] = useState([]);
  useEffect(() => {
    loadAllServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    if (user!=null) {
      if (phone.length == 10) {
        await db
          .collection("register")
          .doc(id)
          .set({
            id: id,
            event: event,
            name: user.name,
            email: user.email,
            phone: phone,
            // venue: values.venue,
          })
          .then((res) => {
            console.log(res);
            alert(`${event} is register`);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            // alert("Event added");
            window.location.reload();
            // alert(err.response.data.err);
          });
      } else {
        toast.error("Please Enter Valid Phone Number");
      }
    } else {
      toast.error("Please Login to register in event");
      // alert("Please Login to register in event");
    }
    console.log(user);
  };

  const loadAllServices = async () => {
    setLoading(true);
    // getServices("price", "desc", page)
    const items = await db
      .collection("events")
      // .where('uid', '==', user.email)
      // .doc()
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((element) => {
          var data = element.data();
          setData((arr) => [...arr, data]);
        });
        setLoading(false);
      });
  };
  const handleremove = async (id,image) => {
    if (window.confirm("Are you sure want to delete this item?")) {
      try {
        await db.collection('events')
          // .where('uid', '==', user.email)
          .doc(id)
          .delete().then(() => {
            console.log("Image is here", event)

            // Data.map((data) => {
              console.log("Image is here", image.public_id)
              var image_id = image.public_id;
              cloudinary.uploader.destroy(image_id, (err, result) => {
                if (err) return
                // alert( err );
                alert("ok");
              })
            // })

          })
          .catch((error) => {
            console.log(error);
          });
        window.location.reload()

      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    }
  };
  return (
    <>
      
      <div className="container box">
        {Data.map((item) => (
          <div data-aos="zoom-in" className="product-box">
            <div className="product">
              <span className="product__price">{item.date}</span>
              <img
                className="product__image"
                src={item.image[0].url}
                alt="Images"
              />
              <h1 className="product__title">{item.event}</h1>
              <hr />
              <p>
                <strong>Speaker: </strong>
                {item.speaker}
              </p>
              <p>
                <strong>venue:</strong> {item.venue}
              </p>

              <a
                onClick={() => {
                  openModal(item.event);
                  setevent(item.event);
                }}
                style={{ cursor: "pointer" }}
                className="product__bttn btn1"
              >
                Register
              </a>
              {user && (user.role === 'admin' && <Button onClick={() => { handleremove(item.id,item.image[0]) }} type="danger" className="mb-3  custumbt" block shape="round" icon={<DeleteOutlined />} size="small">

</Button>)}
            </div>
          </div>

        ))}
        <Modal
          isOpen={modalIsOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Register"
        >
          {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
          <div className="modalcard">
            <button
              className="close"
              style={{ outline: "none", border: "none", textAlign: "right" }}
              onClick={closeModal}
            >
              X
            </button>
            {/* <div>Enter Your</div> */}
            <br />
            <form >
              <input
                className="mobileinput"
                type="text"
                placeholder="Enter Mobile No"
                onChange={(e) => setphone(e.target.value)}
                maxLength="10"
                pattern="[6789][0-9]{9}"
              />
              <br />
              <input type="submit" onClick={submit} value="Register" className="sub" />
            </form>
          </div>
        </Modal>
        <ToastContainer />
      </div>
    </>
  );
};

export default Event;
