const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

// module.exports.sendHello(req, res, next=()=>{}) => {
//   console.log("expect to send hello from sendHello method to" + req.url)

//   //send a return of hello back to client
//   res.end();
// };


module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  if (req.method === "GET") {
    res.writeHead(200, headers);
    res._data="up";
    res.end();
  } else if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    res.end();
  }


  next(); // invoke next() at the end of a request to help with testing!
};
