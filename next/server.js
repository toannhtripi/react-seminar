const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const router = require('./router');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = router.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) throw err; // Need error handler here

    console.log(`Ready on http://localhost:${port}`);
  });
});
