const http = require("http");
const path = require("path");

const {
  mainRouteController,
  defaultRouteController,
  gameRouteController,
  voteRouteController
} = require("./controllers");

const PORT = 3005;

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "vote":
      voteRouteController(res);
      break;
    default:
      defaultRouteController(res, url);
      break;
  }
});

server.listen(PORT);