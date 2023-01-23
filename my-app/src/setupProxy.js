const {createProxyMiddleware} = require("http-proxy-middleware")
module.exports= app => {
app.use(
  createProxyMiddleware('products/categories',{
         target:" https://my-json-server.typicode.com",
         changeOrigin:true

  })

)
}
