const { createServer } = require('vite');

(async () => {
  const server = await createServer({
    root: __dirname,
    server: {
      port: 3000,
      strictPort: true,
    }
  })
  server.transformIndexHtml = async (url, html) => {
    return html;
  }
  await server.listen()
})()
