// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = (app) => {
    app.use(
        '/api/user',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    )
    app.use(
        '/api/board',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            changeOrigin: true,
        })
    )
    app.use(
        '/api/comment',
        createProxyMiddleware({
            target: 'http://localhost:8082',
            changeOrigin: true,
        })
    )
}