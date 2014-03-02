var enterMenu = require("../actions/enterMenu");

var request = require("request");

var watchSeason = function(host){
  
  enterActionUrl = host+JSON.stringify(enterMenu.action);
  request(enterActionUrl, function(error, response, body){  
    console.log("enter");
  });
};

exports.exec = watchSeason 
