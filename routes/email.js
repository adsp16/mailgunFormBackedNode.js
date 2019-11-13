const express = require('express');
const router = express.Router();
const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.DOMAIN
})

const email_to = 'adsp16@gmail.com';


///send contact details
router.post('/', (req, res) => {

  const userEmail = req.body.userEmail;
  const userName = req.body.userName;
  const userMessage = req.body.userMessage;


  const data = {
    from: 'Mailgun <me@sandox.mailgun.org>',
    to: email_to,
    subject: 'You have a new message!',
    html: `Hello, you have received a new message from ${userName}. </br>
    </br> Message : ${userMessage} 
    </br> Email : ${userEmail}`
  }

  mailgun.messages().send(data, (error, body) => {

    return res.status(200).send({
      body: body,
      error: error
    })
  })



})

module.exports = router;