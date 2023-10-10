import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as eventReducer from "../../redux/event/event.reducer";
import * as eventAction from "../../redux/event/event.action";
import Spinner from "../../root/util/spinner/Spinner";
import 'animate.css'; // Import Animate.css styles

function ProEvents() {

  let dispatch = useDispatch();
  let eventInfo = useSelector((state) => {
    return state[eventReducer.eventFeatureKey];
  });

  let { loading, events } = eventInfo;

  useEffect(() => {
    dispatch(eventAction.proEvent());
  }, []);

  return (
    <React.Fragment>
      <section className="p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h3 text-teal animate__animated animate__fadeIn">Pro Events</p>
              <p className="animate__animated animate__fadeIn">
                These events are typically organized for professionals from
                various industries to gather, network, and exchange knowledge.
                They can include conferences, seminars, workshops, and panel
                discussions focused on business trends, leadership, management
                strategies, and industry-specific topics.
              </p>
              <h5 className="text-teal animate__animated animate__fadeIn">Total Available: {events.length}</h5>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {events.length > 0 ? (
            <React.Fragment>
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col">
                      {events.map((event) => (
                        <div className="card mb-4 animate__animated animate__fadeIn" key={event._id}>
                          <img
                            className="animate__animated animate__fadeInUp"
                            style={{ width: "100%", height: "auto" }}
                            src={event.image}
                            alt=""
                          />
                          <div className="card-body">
                            <div className="col">
                              <p className="h4 text-primary animate__animated animate__fadeIn">{event.name}</p>
                              <p className="text-teal animate__animated animate__fadeIn">
                                Date: <span className="text-dark">{event.date}</span>
                              </p>
                              <p className="text-teal animate__animated animate__fadeIn">
                                Price: <span className="text-success">${event.price}</span>
                              </p>
                              <p className="text-muted animate__animated animate__fadeIn">{event.info}</p>
                              <button className="btn btn-primary btn-sm animate__animated animate__fadeIn">
                                Book Now
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </React.Fragment>
          ) : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default ProEvents;
