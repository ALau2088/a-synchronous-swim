const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const messageQueue = require('./messageQueue.js')
// Path for the background image ///////////////////////
// const backgroundImageFile = require("./background.jpg")
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
    // Load image
  //multipart.getFile(backgroundImageFile)

  if (req.method === "GET") {
    res.writeHead(200, headers);
    fs.readFile(this.backgroundImageFile, function(err, data) {
      if (err) throw err;
      console.log('line 21',data)
      res.end(data)
    })
    var directions = ['up', 'down', 'left', 'right']
    var randomDirection = directions[Math.floor(Math.random()*3)];
    // First see if there is message in queue
    var currentMessage=messageQueue.dequeue()
    // If there is no direction in queue create random direction
    if (!currentMessage) {
      // res.end("no direction");
    } else if (currentMessage) {
    res.write(currentMessage)
    res.end();
    }
  } else if (req.method === "OPTIONS") {
    res.writeHead(200, headers);
    // res.end();
  }


  // TODO: Post request for image


  next(); // invoke next() at the end of a request to help with testing!
};
