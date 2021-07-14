const path = require('path');

const express = require('express');
const { createServer: createViteServer } = require('vite');

const fs = require('fs');

async function createServer() {
  const server = express();

  const vite = await createViteServer({
    server: { middlewareMode: 'ssr' },
  });
  // use vite's connect instance as middleware
  server.use(vite.middlewares);

  server.use('/dist', express.static(path.join(__dirname, '../dist')));
  server.use('/', express.static(path.join(__dirname, './assets')));

  server.get('*', async (req, res) => {
    const url = req.originalUrl;

    try {
      // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'templates/index.html'),
        'utf-8',
      );

      // 2. Apply vite HTML transforms. This injects the vite HMR client, and
      //    also applies HTML transforms from Vite plugins, e.g. global preambles
      //    from @vitejs/plugin-react-refresh
      template = await vite.transformIndexHtml(url, template);

      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { render } = await vite.ssrLoadModule('/app/entry-server.js');

      // 4. render the app HTML. This assumes entry-server.js's exported `render`
      //    function calls appropriate framework SSR APIs,
      //    e.g. ReactDOMServer.renderToString()
      const [appHtml, ctx] = await render(url);

      // 5. Inject the app-rendered HTML into the template.
      const html = template.replace(`<!--ssr-outlet-->`, appHtml);

      // 6. Send the rendered HTML back.
      res
        .status(200)
        .set({ 'Content-Type': 'text/html' })
        .end(html);
    } catch (e) {
      // If an error is caught, let vite fix the stracktrace so it maps back to
      // your actual source code.
      vite.ssrFixStacktrace(e);
      console.error(e);
      res.status(500).end(e.message);
    }
  });

  server.listen(process.env.PORT || 3000);
}

createServer();
