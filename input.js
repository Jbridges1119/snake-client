const {MOVE_KEY, VOICE1} = require('./constants')
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === 'w') connection.write(MOVE_KEY.w);
  if (key === 'a') connection.write(MOVE_KEY.a);
  if (key === 's') connection.write(MOVE_KEY.s);
  if (key === 'd') connection.write(MOVE_KEY.d);
  if (key === 'q') connection.write(VOICE1.q)
  if (key === 'e') connection.write(VOICE1.e)
  if (key === '\u0003') {
    console.log('Exit');
    process.exit();
    
  }
};


module.exports = { setupInput };