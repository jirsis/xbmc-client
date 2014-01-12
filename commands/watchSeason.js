var contextMenu = require("../actions/contextMenu");
var downMenu = require("../actions/downMenu");
//var enterMenu = require("../actions/enterMenu");

var request = require("request");

var watchSeason = function(host){
  console.log(contextMenuAction);
  request(contextMenuAction, function(error, response, body){
      console.log("menu contextual");
      request(downMenuAction, function(error, response, body){
        console.log("Reproducir");
        request(downMenuAction, function(error, response, body){
          console.log("Añadir a favoritos");
          request(downMenuAction, function(error, response, body){
            console.log("Información de serie de tv");
            request(downMenuAction, function(error, response, body){
              console.log("Marcar como no visto");
              request(downMenuAction, function(error, response, body){
                console.log("Marcar como visto");
//                request(enterMenuAction, function(error, response, body){
//                  console.log("Marcado!!");
//                }); 
              }); 
            }); 
          }); 
        }); 
      }); 
  });
};

exports.watchSeason = watchSeason 
