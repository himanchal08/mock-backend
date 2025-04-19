import { createServer } from "http";
import { WebSocketServer } from "ws";

const PORT = process.env.PORT || 3000;

const server = createServer();

const wss = new WebSocketServer({ server });

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

server.listen(PORT, () => {
  console.log(`✅ WebSocket server running on port ${PORT}`);
});
