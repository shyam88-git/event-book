import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <React.Fragment>
      <div className="landing-page">
        <div className="wrapper">
          <div className="d-flex flex-column justify-content-center text-center align-items-center h-100">
            <h5 className="display-4">Let's Book An Event</h5>
            <p className="lead px-4">
              EVENTSNOW – ALL UPCOMING EVENT <br></br> Find all upcoming Academic Events,
              International Conferences, Virtual Meetings, Webinars, Concert,
              Festival, Video Conferences, Events near me, Web Conferences, Live
              Show etc. | Submit Your Eventsnow for free and get large number of
              attendees for your event to make grand success
            </p>
            <Link to="/events/free" className="btn btn-danger btn-sm">Book Now</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
