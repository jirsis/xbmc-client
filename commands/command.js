var infoApi = require("./infoApi");
var watchSeason = require("./watchSeason");
var watchEpisode = require("./watchEpisode");
var watchEpisodes = require("./watchEpisodes");
var watchTvShow = require("./watchTvShow");

var commands = []
commands["infoApi"] = infoApi;
commands["watchSeason"] = watchSeason;
commands["watchEpisode"] = watchEpisode;
commands["watchEpisodes"] = watchEpisodes;
commands["watchTvShow"] = watchTvShow;

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
