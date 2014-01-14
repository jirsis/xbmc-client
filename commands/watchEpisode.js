var contextualMenu = require("../actions/contextMenu");
var contextualMenu = require("../actions/contextMenu");
var downMenu = require("../actions/downMenu");
var enterMenu = require("../actions/enterMenu");

var request = require("request");

var watchSeason = function(host){
  
  contextualActionUrl = host+JSON.stringify(contextualMenu.action);
  downActionUrl = host+JSON.stringify(downMenu.action);
  enterActionUrl = host+JSON.stringify(enterMenu.action);
  request(contextualActionUrl, function(error, response, body){  
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
              }); 
            }); 
          }); 
        }); 
      }); 
    });
  });
};

exports.exec = watchSeason 
