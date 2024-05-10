const os = require("os")
const http = require("node:http")

const port = 9000;
const timeoutDuration = 5000;

const server = http.createServer((req, res) => {
  // Handling CORS
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Asynchronous response simulation
  setTimeout(() => {
    if (req.method === "GET") {
      if (req.url === "/" || req.url === "/info") {
        const info = {
          cpu: os.cpus(),
          uptime: os.uptime(),
          machine: os.machine(),
          version: os.version(),
          userInfo: os.userInfo(),
          type: os.type(),
          totalmem: os.totalmem(),
          freemem: os.freemem(),
          release: os.release(),
          platform: os.platform(),
          hostname: os.hostname(),
          homedir: os.homedir(),
          arch: os.arch(),
        };

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(info));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Error: Page not Found");
      }
    } else {
      res.writeHead(405, { "Content-Type": "text/plain" });
      res.end("405 Method Not Allowed");
    }
  }, timeoutDuration);
});

server.on("error", (error) => {
  console.error("Server error:", error);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


// url - localhost:9000