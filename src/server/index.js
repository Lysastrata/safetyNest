var express = require('express');
var axios = require('axios');
const bodyParser = require('body-parser');

var app = express();
let port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/seeker', (req, res) => {
  console.log('req.query.sentString for get: ', req.query.sentString);

  res.status(200).send([{
    foundRoom: true,
    zipCode: 98765,
    email: 'asdf@gmail.com',
    phoneNum: '123456789'
  },{
    
  }
  ]);
});

app.post('/provider', (req, res) => {
  console.log('req.body for post: ', req.body);
});



app.listen(port, () => {
  console.log(`listening on port ${port}!`);
})