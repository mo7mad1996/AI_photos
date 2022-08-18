const express = require('express')
const bodyParser = require('body-parser');
const deepai = require('deepai');

require('dotenv').config()

deepai.setApiKey(process.env.deepai_key);

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
      text: req.body.text,
    })
    .then(data => res.json(data))
    .catch(err => {
      console.log(err.response)
      res.status(err.response.status).json(err)
    })

})
app.listen(process.env.PORT || 3000)

// const axios = require('axios')

// axios.post(
//     'https://api.replicate.com/v1/predictions', // host URL
//     {
//       // data
//       "version": "5c7d5dc6dd8bf75c1acaa8565735e7986bc5b66206b55cca93cb72c9bf15ccaa",
//       "input": {
//         "text": "Alice"
//       }
//     }, {
//       // request headers
//       Headers: {
//         'Content-Type': 'application/json',
//         "Authorization": `Token ${process.env.replicate_token}`
//       }
//     })
//   .then(res => console.log(res))
//   .catch(err => console.log(err))