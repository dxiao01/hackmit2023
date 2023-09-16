const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 
require("dotenv").config({ path: "../.env" });

const accountSid = 'ACab2a361ba579f091288b02d6d753009b';
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = new twilio(accountSid, authToken); 

const app = express();

app.use(cors()); 


app.get('/', (req, res) => {
    res.send('Welcome to Helping Hand')
})


app.get('/send-text', (req, res) => {

    res.send('Welcome to Helping Hand')


    const { recipient, textmessage } = req.query;



    client.messages.create({
        body: textmessage,
        to: recipient,  
        from: '+18787686086'
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))