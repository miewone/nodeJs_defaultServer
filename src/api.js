// @ts-check

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

/**
 * @typedef APIResponse
 * @property {number} statusCode
 * @property {*} body
 */

/**
 * @typedef Route
 * @property {RegExp} url
 * @property {'GET' | 'POST'} method
 * @property { () => Promise<APIResponse>} callback
 */

/** @type {Route[]} */
const routes = [
  {
    url: /^\/posts$/,
    method: "GET",
    callback: async () => ({
      // TODO : implement
      statusCode: 200,
      body: "test",
    }),
  },
  {
    url: /^\/posts\/([a-zA-Z0-9-_]+)$/,
    method: "GET",
    callback: async () => ({
      // TODO : implement
      statusCode: 200,
      body: {},
    }),
  },
  {
    url: /^\/posts$/,
    method: "POST",
    callback: async () => ({
      // TODO : implement
      statusCode: 200,
      body: {},
    }),
  },
];

module.exports = {
  routes,
};
