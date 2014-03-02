var contextualMenu = require("../actions/contextMenu");

var request = require("request");

var watchTvShow = function(host){
  
  contextualActionUrl = host+JSON.stringify(contextualMenu.action);
  
  request(contextualActionUrl, function(error, response, body){  
    console.log("Menu contextual");
  });
};

exports.exec = watchTvShow 
