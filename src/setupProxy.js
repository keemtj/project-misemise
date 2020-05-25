const { createProxyMiddleware } = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = (app) => {
  app.use(
    createProxyMiddleware('/map-reversegeocode/', {
      target: 'https://naveropenapi.apigw.ntruss.com/',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/getVilageFcst', {
      target: 'http://apis.data.go.kr/1360000/VilageFcstInfoService/',
      changeOrigin: true,
    }),
  );
  // app.use(
  //   createProxyMiddleware('/6d4d776b466c656533356a4b4b5872', {
  //     target: 'http://openapi.seoul.go.kr:8088/',
  //     changeOrigin: true,
  //   }),
  // );
};
