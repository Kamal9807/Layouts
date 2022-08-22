let http = require("http");
let uc = require("upper-case");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(uc.upperCase("Hello World"));
    res.end("Thank You");
  })
  .listen(9000);

//it is not working due to upper-case module is not found
