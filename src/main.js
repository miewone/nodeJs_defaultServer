// @ts-check

const http = require("http");

/**
 * @typedef Post
 * @property {string} id
 * @property {string} title
 * @property {string} content
 */

/**
 * @type {Post[]}
 */
const posts = [
  {
    id: "my_first_post",
    title: "My first post",
    content: "hello!",
  },
  {
    id: "my_second_post",
    title: "My second post",
    content: "second content",
  },
];

const server = http.createServer((req, res) => {
  const POSTS_ID_REGEX = /^\/posts\/([a-zA-Z0-9-_]+)$/;
  const postIdRegexResult =
    (req.url && POSTS_ID_REGEX.exec(req.url)) || undefined;

  if (req.url === "/posts" && req.method === "GET") {
    res.statusCode = 200;
    res.end("OK");
  } else if (postIdRegexResult) {
    // GET /posts/:id
    const postId = postIdRegexResult[1];
    console.log(postId);
    res.statusCode = 200;
    res.end("OK");
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
