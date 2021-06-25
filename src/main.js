// @ts-check

const http = require("http");

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;

  if (req.url === "/posts" && req.method === "GET") {
    res.statusCode = 200;
    res.end("OK");
  } else if (req.url && POSTS_ID_REGEX.test(req.url)) {
    const regexResult = POSTS_ID_REGEX.exec(req.url);

    if (regexResult) {
      const postId = regexResult[1];
      console.log(postId);
    }

    res.statusCode = 200;
    res.end("Some Content of the post");
  } else if (req.url === "/posts" && req.method === "POST") {
    res.statusCode = 200;
    res.end("OK");
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

const PORT = 4020;

server.listen(PORT, () => {
  console.log(`port : ${PORT}`);
});
