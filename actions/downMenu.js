var downMenu = {
  jsonrpc: "2.0",
  method: "Input.Down",
  id: 1
};

var action = function(host){
  return "http://" + host + JSON.stringify(contextMenu);
}

exports.downMenuAction = action;
