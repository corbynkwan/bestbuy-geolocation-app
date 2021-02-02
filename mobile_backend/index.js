const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const axios = require("axios");
const sendGrid = require('@sendgrid/mail');
require('dotenv').config();
sendGrid.setApiKey(process.env.SENDGRID_API_KEY);



const app = express();
app.use(bodyParser.json());




app.use(cors());
app.use(express.json()); //req.body
//ss
const sendMail = true;
app.post("/sendEmail", async (req, res) => {
  const {mins,location,items,id} = req.body
  
    const msg = {
        to: 'corbynkwan@gmail.com',
        from: "corbynkwan@gmail.com",
        subject: `Customer ${id} is coming to ${location} in ${mins} minutes to buy ${items}!`,
        text: `I'm coming in ${mins} minutes!`
    }

    sendGrid.send(msg)
        .then(result => {
            sendMail = false;
            console.log("sent email!")
            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

          console.log('error: ', err.response.body);
          res.status(401).json({
              success: false
          });

      });
  
});
app.post("/sendParkingInfo", async (req, res) => {    
  console.log(req.body);    
  const {id,parkingLot,description} = req.body
  
    const msg = {
        to: 'corbynkwan@gmail.com',
        from: "corbynkwan@gmail.com",
        subject: `Customer ${id} has arrived in ${parkingLot}!`,
        text: 
`Parking Lot: ${parkingLot}
Description: ${description}`
    }

    sendGrid.send(msg)
        .then(result => {
            console.log("sent email!")
            res.status(200).json({
                success: true
            });

        })
        .catch(err => {
          console.log('error: ', err);
          res.status(401).json({
              success: false
          });

      });
  
});
app.post("/calculate", async (req, res) => {
  const {latitude,longitude,location,items,id} = req.body
  //console.log({latitude,longitude,location,items,id})
  if(longitude !=undefined && latitude !=undefined && location!=undefined && items!=undefined && id!=undefined){
    //console.log("not undefined",{latitude,longitude,location,items,id})
    console.log({latitude,longitude})
    await axios({
    method: 'get',
    url: `https://maps.googleapis.com/maps/api/directions/json?origin=${latitude},${longitude}&destination=best%20buy%20${location}&key=${process.env.GOOGLE_API_KEY}}`
  })
    .then(async function (response) {
      if(sendMail){
      await axios.put(`https://bestbuy-database-default-rtdb.firebaseio.com/orders/${id}.json`, {id, location,items,timeRemaining: response.data.routes[0].legs[0].duration.text});
      let mins = response.data.routes[0].legs[0].duration.text.replace(/\D/g,'');
      console.log(mins+ " mins away");
      if(mins < 15) {
        const msg = {
            to: 'corbynkwan@gmail.com',
            from: "corbynkwan@gmail.com",
            subject: `Customer ${id} is coming to ${location} in ${mins} minutes to buy ${items}!`,
            text: `I'm coming in ${mins} minutes!`
        }
    
        sendGrid.send(msg)
            .then(result => {
                sendMail = false;
                res.status(200).json({
                    success: true
                });
    
            })
            .catch(err => {

              console.log('error: ', err.response.body);
              res.status(401).json({
                  success: false
              });
  
          });
      }
    }
      //res.status(200).json(response.data.routes[0].legs[0].duration.text)

    })
    .catch(err => {
      
      console.log('error: ', err.response.body);
      console.log("too far away")

  });
  }
});

//get, put, post, delete stuff
app.listen(5000, () => {
    console.log("server has started on port 5000");
  });