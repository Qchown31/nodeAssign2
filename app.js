const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");

// load engine
app.use(express.static(path.join(__dirname + '/assets')));
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: false }))


//  home page 
app.get('/', function(req, res){
    res.status(200).render('index')
});

app.get('/index.html', function(req, res){
  res.status(200).render('index')
});
app.get('/services.html', function(req, res){
  res.status(200).render('services')
});

app.get('/gallery.html', function(req, res){
  res.status(200).render('gallery')
});

app.get('/quote-form.html', function(req, res){
  res.status(200).render('quote-form')
});


app.use(bodyParser.json());

app.post('/quote-form.html', function(req, res){
  // urlencoded() parses the post body for us and passes it to request.body where we can access the params
  console.log(req.body);
  res.send('Thank you we will get back to as soon as we can');
})

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});
// sever start
app.listen(3000, function(){
  console.log('started on port 3000...')
})