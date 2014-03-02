var downMenu = require("../actions/downMenu");

var request = require("request");

var watchEpisode = function(host){
  
  downActionUrl = host+JSON.stringify(downMenu.action);
  request(downActionUrl, function(error, response, body){  
    console.log("Abajo");
  });
};

exports.exec = watchEpisode
