var infoApi = require("./infoApi");
var watchSeason = require("./watchSeason");
var watchEpisode = require("./watchEpisode");
var watchEpisodes = require("./watchEpisodes");
var watchTvShow = require("./watchTvShow");
var watchFilm = require("./watchFilm");
var menuContextual = require("./menuContextual");
var up = require("./up");
var down = require("./down");
var enter = require("./enter");


var commands = []
commands["infoApi"] = infoApi;
commands["watchSeason"] = watchSeason;
commands["watchEpisode"] = watchEpisode;
commands["watchEpisodes"] = watchEpisodes;
commands["watchTvShow"] = watchTvShow;
commands["watchFilm"] = watchFilm;
commands["menu"] = menuContextual;
commands["up"] = up;
commands["down"] = down;
commands["enter"] = enter;

var handle = function(host, command){
  if (commands[command] === undefined) {
    console.log("Command '"+ command+ "' not found");
    console.log(" available commands:");
    for (command in commands ){
      console.log("  * " + command);
    }
  } else {
    commands[command].exec(host);
  }
}

exports.handle = handle;
