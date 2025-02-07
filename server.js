import http from "node:http";

// create a local server to receive data from
const server = http.createServer();

server.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      data: "Hello World!",
    })
  );
});

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
