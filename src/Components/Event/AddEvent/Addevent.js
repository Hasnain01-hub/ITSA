// import Lottie from "lottie-react";
import {React,useState} from "react";
import { db } from "../../../Firebase";
import "./Addevent.css";
import { v4 as uuidv4 } from 'uuid';
const initialState = {
    event: '',
    date: '',
    desc: '',
    images: [],
  };
const Addevent = () => {
    var id =uuidv4();
    const [values, setValues] = useState(initialState);
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await db.collection("events").doc(id).set({
            id : id,
            event: values.event,
            date: values.date,
            description: values.desc,
            image: values.images,
        })
          .then((res) => {
            console.log(res);
            window.alert(`"${res.data.brands}" is created`);
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
            alert("Event added")
            window.location.reload();
            // alert(err.response.data.err);
          });
      };
  return (
    <>
      <div class="containerevent">
        <div class="cardevent">
          <div class="card-image">
            {/* <Lottie className="eventgif" animationData={backg}  loop={true} /> */}
          </div>
          <form class="card-form">
            <div class="input">
              <input type="text" name="event" onChange={handleChange} class="input-field" required />
              <label class="input-label">Event</label>
            </div>
            <div class="input">
              <input type="text" name="date" onChange={handleChange} class="input-field" required />
              <label class="input-label">Date</label>
            </div>
            <div class="input">
              <input type="text" name="desc" onChange={handleChange} class="input-field" required />
              <label class="input-label">Description</label>
            </div>
            <div class="input">
				<input type="file" name="images" onChange={handleChange} class="input-field" required/>
				<label class="input-label">Image</label>
			</div>
            <div class="action">
              <button class="action-button" onClick={handleSubmit}>Submit</button>
            </div>
          </form>
          {/* <div class="card-info">
			<p>By signing up you are agreeing to our <a href="#">Terms and Conditions</a></p>
		</div> */}
        </div>
      </div>
    </>
  );
};

export default Addevent;
