const api_key = 'b8ef7571-4b05-44be-82fb-a1f189faa691'
// const api_key = '53214894-1872-4441-a15d-f599eaf3862d'

const bodyParser = require('body-parser');
const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey(api_key);


const fs = require('fs');




const express = require('express')
const app = express()
app.use(express.static('static'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.post('/api', async (req, res) => {

  deepai
    .callStandardApi("text2img", {
      text: "car",
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))

})
app.listen(process.env.PORT || 3000)