const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      target: "http://192.168.93.16:9031",
      changeOrigin: true, //修改服务器收到请求头中Host的信息
      pathRewrite: { "^/api1": "" },
    }),
    createProxyMiddleware("/api2", {
      target: "http://192.168.93.14:9031",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    }),
    createProxyMiddleware("/gateway", {
      target: "http://localhost:9080",
    })
  );
};
