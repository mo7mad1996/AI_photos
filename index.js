const api_key = '53214894-1872-4441-a15d-f599eaf3862d'

const bodyParser = require('body-parser');
const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey(api_key);

const express = require('express')
const app = express()
app.use(express.static('static'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.post('/api', (req, res) => {
  deepai.callStandardApi("text2img", {
    text: req.body.text,
  }).then(data => res.json({
    data
  })).catch(err => res.status(401).json({
    err
  }))
})
app.listen(process.env.PORT || 3000)