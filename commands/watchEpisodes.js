var contextualMenu = require("../actions/contextMenu");
var contextualMenu = require("../actions/contextMenu");
var downMenu = require("../actions/downMenu");
var enterMenu = require("../actions/enterMenu");

var request = require("request");

function ask(question, format, callback) {
 var stdin = process.stdin, stdout = process.stdout;
 
 stdin.resume();
 stdout.write(question + ": ");
 
 stdin.once('data', function(data) {
   data = data.toString().trim();
 
   if (format.test(data)) {
     callback(data);
   } else {
     stdout.write("It should match: "+ format +"\n");
     ask(question, format, callback);
   }
 });
}

var watch = function(host, callback){

  if(callback.length > 0){
    
    contextualActionUrl = host+JSON.stringify(contextualMenu.action);
    downActionUrl = host+JSON.stringify(downMenu.action);
    enterActionUrl = host+JSON.stringify(enterMenu.action);

    request(contextualActionUrl, function(error, response, body){  
      console.log(contextualActionUrl);
      console.log("Menu contextual");
      request(downActionUrl, function(error, response, body){
        console.log("Reproducir usando");
        request(downActionUrl, function(error, response, body){
          console.log("Reproducir desde aqui");
          request(downActionUrl, function(error, response, body){
            console.log("Añadir a favoritos");
            request(downActionUrl, function(error, response, body){
              console.log("Información de episodio");
              request(downActionUrl, function(error, response, body){
                console.log("Marcar como visto");
                request(enterActionUrl, function(error, response, body){
                  console.log("Marcado!!");
                  callback[0](host, callback.slice(1));
                }); 
              }); 
            }); 
          }); 
        }); 
      });
    });
  }else{
    console.log("algo ha ido mal: "+host+" "+callback);
  }
};

var endCommands = function(host, callback){
  process.exit();
};

var watchEpisodes = function(host){
  ask("How many times", /.+/, function(times){
    var commands = [];
    for (var i =0; i<times; i++){
      commands.push(watch);
    }
    commands.push(endCommands);
    commands[0](host, commands.slice(1));
  })
};
  

exports.exec = watchEpisodes
