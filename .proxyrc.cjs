const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use((req, res, next) => {
      res.removeHeader('Cross-Origin-Resource-Policy');
      res.removeHeader('Cross-Origin-Embedder-Policy');
      res.removeHeader('Cross-Origin-Opener-Policy');
      res.removeHeader('Access-Control-Allow-Origin')
      res.removeHeader('Access-Control-Allow-Headers')
      res.removeHeader('Access-Control-Allow-Methods')

      next();
  });
};