import { LoadingOutlined } from '@ant-design/icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { React, useState } from "react";
import { db } from "../../../Firebase";
import { v4 as uuidv4 } from "uuid";
import "./Addevent.css";
import Uploadfile from "./UploadFile";

const initialState = {
  event: "",
  date: "",
  speaker: "",
  venue: "",
  images: [],
};
const Addevent = () => {
  const [loading, setLoading] = useState(false);
  var id = uuidv4();
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      values.event !== "" &&
      values.date !== "" &&
      values.desc !== "" 
      &&
      values.images.length > 0
    ) {
      await db
        .collection("events")
        .doc(id)
        .set({
          id: id,
          event: values.event,
          date: values.date,
          image: values.images,
          speaker: values.speaker,
          venue: values.venue,
        })
        .then((res) => {
          console.log(res);
          alert(`"${values.event}" is added`);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          // alert("Event added");
          window.location.reload();
          // alert(err.response.data.err);
        });
    } else {
      toast.error("Please fill all the fields");
    }
  };
  
  return (
    <>
    
    {/* {loading ? (<LoadingOutlined className="text-danger h1" />) : (<h4 className="heading">Events</h4>)} */}
      <div class="containerevent">
        <div class="cardevent">
          <div class="card-image">
            {/* <Lottie className="eventgif" animationData={backg}  loop={true} /> */}
          </div>
          <form class="card-form" onSubmit={handleSubmit}>
            <div class="input">
              <input
                type="text"
                name="event"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Event</label>
            </div>
            <div class="input">
              <input
                type="text"
                name="date"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Date</label>
            </div>
            <div class="input">
              <input
                type="text"
                name="speaker"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Speaker</label>
            </div>
            <div class="input">
              <input
                type="text"
                name="venue"
                onChange={handleChange}
                class="input-field"
                required
              />
              <label class="input-label">Venue</label>
            </div>
            {/* <div class="input"> */}
              {/* <input
                type="file"
                onChange={handleChange}
                name="images"
                class="input-field"
                required
              /> */}
              <Uploadfile values={values} setValues={setValues} setLoading={setLoading} />
              {/* <label class="input-label">Image</label> */}
            {/* </div> */}
            <div class="action">
              <button class="action-button" >
                Submit
              </button>
            </div>
          </form>
          {/* <div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
		</div> */}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Addevent;
