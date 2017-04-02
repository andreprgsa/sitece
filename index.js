var express = require('express')
var path = require('path');
var fs = require('fs')
var https = require('https')
var http = require('http')
var app = express()
var bodyParser = require('body-parser')
var helmet = require('helmet')

// Enable https 
var privateKey = fs.readFileSync('/etc/letsencrypt/live/preproduction.ce-wavestone.fr/privkey.pem', 'utf8');
var certificate = fs.readFileSync('/etc/letsencrypt/live/preproduction.ce-wavestone.fr/cert.pem', 'utf8');
var chain = fs.readFileSync('/etc/letsencrypt/live/preproduction.ce-wavestone.fr/chain.pem', 'utf8');

var credentials = {
    key: privateKey,
    cert: certificate,
    ca: chain
};

// Start the server
const unsaveServer = http.createServer(app).listen(80, '178.32.124.254')
const server = https.createServer(credentials, app).listen(443,'178.32.124.254');
console.log('Your server is running on ports 80 and 443.');  

app.use(helmet())
app.use(helmet.hidePoweredBy({ setTo: 'des nocturnes sans fin...' }));
//app.use(helmet.noCache()) - TODO necessary ?

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.all('*', ensureSecure);

function ensureSecure(req, res, next){
  if(req.secure){
    return next();
  };
  res.redirect('https://' + req.hostname + req.url);
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => {
    res.sendfile('index.html');
});