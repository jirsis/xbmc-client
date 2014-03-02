var upMenu = require("../actions/upMenu");

var request = require("request");

var up = function(host){
  
  upActionUrl = host+JSON.stringify(upMenu.action);
  request(upActionUrl, function(error, response, body){  
    console.log("Abajo");
  });
};

exports.exec = up
