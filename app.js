var express = require('express');
var app = express();
const request = require("request")
var bodyParser = require('body-parser');
//import all Schema

var port = process.env.PORT || 4300;
app.use(express.static('./dist/sWork'));
// use middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/clients', async(req, res) => {
  request('http://demo8360259.mockable.io/clients', function (error, response, body) {
    res.status(response.statusCode)
    res.json(JSON.parse(body))
  });
})
app.get('*', (req, res) => {

  return res.sendFile('index.html', {root: 'dist/sWork'});
});


app.use((req, res, next) => {

  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {

  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

app.listen(port, () => {
  console.log(`Server started on :` + port);
});
