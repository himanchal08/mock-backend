const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 3000 }, () => {
  console.log("✅ WebSocket server started on ws://localhost:3000");
});

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (message) => {
    const text = message.toString();
    console.log("📩 Received:", text);

    if (text === "start-animation") {
      ws.send("start-animation");
    }

    if (text === "stop-animation") {
      ws.send("stop-animation");
    }
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
