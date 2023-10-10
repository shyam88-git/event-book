const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const Event=require('../models/Event');
const authenticate=require('../middlewares/authentication');

/* Event Router
   Usage: Upload an event
   URL: http://127.0.0.1:5000/api/events/upload
   Params: name, image, date, type, price, info
   Access: Private
   method:POST
*/

router.post(
  "/upload",authenticate,
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("image").notEmpty().withMessage("Image is required"),
    body("date").notEmpty().withMessage("Date is required"),
    body("type").notEmpty().withMessage("Type is required"),
    body("price").notEmpty().withMessage("Price is required"),
    body("info").notEmpty().withMessage("Info is required"),
  ],
  async (request, response) => {
    let error = validationResult(request);
    if (!error.isEmpty()) {
      return response.status(401).json({
        error: error.array(),
      });
    }

    try {
      let { name, image, date, type, price, info } = request.body;
      //check if user is exits
      let user = request.user.id;
      let event = new Event({ user, name, image, date, type, price, info });
      event = await event.save();
      response.status(200).json({
        msg: "Event upload is successful",
        event: event,
      });
    } catch (error) {
      console.error(error);
      response.status(500).json({
        error: [
          {
            msg: error.message,
          },
        ],
      });
    }
  }
);

/* EVENT Router
   USAGE: Get Free Events
   URL: http://127.0.0.1:5000/api/events/free
   Params: None
   Access: Public
   Method: GET
*/

router.get("/free", async (request, response) => {
  try {
    let events=await Event.find({type:'FREE'});
    response.status(200).json({events:events});
  } catch (error) {
    console.error(error);
    response.status(500).json({errors:[{ msg: "Internal server error" }]});
  }
});

/* Event Router
   Usage: Get Pro Events
   URL: http://127.0.0.1:5000/api/events/pro
   Params: None
   Access: Private
   Method: GET
*/

router.get("/pro", authenticate,async (request, response) => {
  try {
    let events=await Event.find({type:'PRO'});
    response.status(200).json({events:events});

  } catch (error) {
    console.error(error);
    response.status(500).json({errors:[{ msg: "Internal server error" }]});
  }
});

module.exports = router;
