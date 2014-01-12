var commandHandler = require("./commands/command");

var args = process.argv.slice(2);

if (args[0] == undefined){
  console.log("undefined host");
  process.exit(-1);
}

host = "http://"+args[0]+"/jsonrpc?request=";
command = args[1];


commandHandler.handle(host, command);
