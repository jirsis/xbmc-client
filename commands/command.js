var infoApi = require("./infoApi");
var watchSeason = require("./watchSeason");

var commands = []
commands["infoApi"] = infoApi;
commands["watchSeason"] = watchSeason;

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
