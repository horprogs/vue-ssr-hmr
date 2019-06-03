const path = require('path');

const server = require('express')()

const { createBundleRenderer } = require('vue-server-renderer')

const template = require('fs').readFileSync(path.join(__dirname, './templates/index.html'), 'utf-8');
const serverBundle = require(path.join(__dirname, '../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.join(__dirname, '../dist/vue-ssr-client-manifest.json'));

const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // recommended
    template, // (optional) page template
    clientManifest // (optional) client build manifest
})

// server.use('/dist', server.static(path.join(__dirname, './dist')));

server.get('*', (req, res) => {
    const context = { url: req.url }

    renderer.renderToString(context, (err, html) => {
        if (err) {
            if (err.code === 404) {
                res.status(404).end('Page not found')
            } else {
                console.log(err)
                res.status(500).end('Internal Server Error')
            }
        }


        res.end(html);
    })
})

server.listen(8080)
