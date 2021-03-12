const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/v1/conferences/", {
      target: "https://api.clickmeeting.com",
      changeOrigin: true,
      // pathRewrite: {
      //   "^/\\.netlify/functions": "",
      // },
    })
  );
};
