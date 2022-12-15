let connection;

const handleUserInput = function (key) {
    
    if (key === "w") {
        connection.write("Move: up");      
    }
    if (key === "a") {
        connection.write("Move: left");
    }
    if (key === "s") {
        connection.write("Move: down");
    }
    if (key === "d") {
        connection.write("Move: right");
    }
    if (key === "u") {
        connection.write("Say: YOLO");
    }
    if (key === "h") {
        connection.write("Say: Hellooo");
    }
    if (key = "\u0003") {
        console.log("Quit");
        process.exit();
    }
    
};


const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on("data", handleUserInput);
    return stdin;
  };
  
  module.exports = { setupInput };