var version = require("../actions/version");
var request = require("request");
// var options = require("../actions/parseOptions");

var optionsTemplate = function(host, action){
  return {
    "uri": "http://"+host+"/jsonrpc",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(action),
  }
};

var info = function(host){
  url = host+JSON.stringify(version.action);

  // var options = optionsTemplate(host, version.action);

  var options = {
    "uri": "http://zurawina.local:8080/jsonrpc",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": JSON.stringify(version.action),
  };

  request.post(options, function(err, response, body){
    if (response.statusCode === 200){
        res = JSON.parse(body);
        if (res.error === undefined){
          console.log(JSON.stringify(res, null, 2));
        }else{
          console.error("req-data: "+ JSON.stringify(version.action, null, 2))
          console.error("req: "+ url);
          console.error("res: "+ JSON.stringify(res, null, 2));

        } 
      }
  });
}

exports.exec = info
