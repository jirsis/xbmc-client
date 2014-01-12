var query = require("../actions/version");
var request = require("request");

var info = function(host){
  url = host+JSON.stringify(query.version);
 
  request(url, function(error, response, body){
    if (response.statusCode === 200){
      res = JSON.parse(body);
      if (res.error === undefined){
        console.log(JSON.stringify(res, null, 2));
      }else{
        console.error(JSON.stringify(res, null, 2));
      } 
    }
  });
}

exports.exec = info
