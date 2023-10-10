import React from "react";
import brand from "../../assets/image/eventnow.jpg";
import "animate.css"; // Import Animate.css
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as eventAction from '../../redux/event/event.action';

function UploadEvents() {
let dispatch=useDispatch();
let navigate=useNavigate();

  const[events,setEvents]=useState({

    name:"",
    image:"",
    type:"",
    price:"",
    date:"",
    info:""
  });

  let updateInput=(event)=>{

      setEvents({

        ...events,
        [event.target.name]:event.target.value
      });
  }

  let uploadSubmit=(event)=>{

    event.preventDefault();
    dispatch(eventAction.uploadEvent(events,navigate));
  }
  return (
    <div className="upload-events">
     
      <section className="upload-events-header py-3 bg-primary text-white text-center animate__animated animate__zoomIn">
        <h2 className="mb-0">Upload Events</h2>
        <p className="lead">
          Share your exciting events with the community. Let's make them memorable!
        </p>
      </section>

      <section className="upload-form-section py-3 animate__animated animate__fadeInUp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form onSubmit={uploadSubmit}
              className="upload-form border p-3 rounded bg-light">
                <div className="form-group">
                  <input type="text"
                   name="name"
                   value={events.name}
                   onChange={updateInput}
                   
                   className="form-control" placeholder="Event Name" />
                </div>

                <div className="form-group">
                  <input type="text" name="image"
                   value={events.image}
                   onChange={updateInput}
                    className="form-control" placeholder="Image URL" />
                </div>

                <div className="form-group">
                  <select className="form-control" name="type"
                   value={events.type}
                   onChange={updateInput}
                   >
                    <option value="">Event Type</option>
                    <option value="FREE">FREE</option>
                    <option value="PRO">PRO</option>
                  </select>
                </div>

                <div className="form-group">
                  <input type="number" name="price"
                   value={events.price}
                   onChange={updateInput}
                    className="form-control" placeholder="Price" />
                </div>

                <div className="form-group">
                  <input type="text" name="date"
                   value={events.date}
                   onChange={updateInput}
                    className="form-control" placeholder="Date" />
                </div>

                <div className="form-group">
                  <textarea rows="3" name="info"
                   value={events.info}
                   onChange={updateInput}
                    className="form-control" placeholder="Event Information" />
                </div>
                
                <div className="text-center mb-3">
                  <button type="submit" className="btn btn-primary btn-upload">
                    Upload Event
                  </button>
                </div>
                
                <div className='card-footer text-center py-3'>
                  <img src={brand} alt='EventNow' width='120' height='30' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UploadEvents;
