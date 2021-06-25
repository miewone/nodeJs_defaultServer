// @ts-check

const { rejects } = require("assert");
const fs = require("fs");
const http = require("http");
const { routes } = require("./api");

const server = http.createServer((req, res) => {
  async function main() {
    const route = routes.find(
      (_route) =>
        req.url && _route.url.test(req.url) && _route.method === req.method
    );

    if (!req.url || !route) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    const regetResult = route.url.exec(req.url);

    if (!regetResult) {
      res.statusCode = 404;
      res.end("Not found");
      return;
    }

    /** @type {Object.<string,*> | undefined} */
    const reqBody =
      (req.headers["content-type"] === "application/json" &&
        (await new Promise((resolve, reject) => {
          req.setEncoding("utf-8");
          req.on("data", (data) => {
            try {
              resolve(JSON.parse(data));
            } catch {
              reject(new Error("Ill-formed json"));
            }
          });
        }))) ||
      undefined;

    const result = await route.callback(regetResult, reqBody);
    res.statusCode = result.statusCode;

    if (typeof result.body === "string") {
      res.end(result.body);
    } else {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.end(JSON.stringify(result.body));
    }
  }
  main();
});

const PORT = 4040;

server.listen(PORT, () => {
  console.log(`this port : ${PORT}`);
});
