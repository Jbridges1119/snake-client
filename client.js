const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  conn.on("connect", () => {
    console.log("Connection established");
    conn.write("Name: Ayo");
    conn.write("Move: up");
    setInterval(() => {
      conn.write("Move: up");
    }, 50);
  });

  conn.on("data", (data) => {
    console.log(data)
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};


module.exports = {connect};