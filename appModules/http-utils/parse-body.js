function parseBody(req, callback) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      callback(null, body);
    });
    req.on("error", (error) => {
        callback(error, null);
      });
  })
}
  module.exports = parseBody; 