// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://carla-milhano.vercel.app/' });

const writeStream = createWriteStream('./public/sitemap.xml');

sitemap.pipe(writeStream);

// Add your routes here
const routes = ['/', '/psicologiaepsicoterapia', '/contactos', '/mindfulwalking', '/eventos', '/admin'];

routes.forEach(route => sitemap.write({ url: route }));

sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✅ sitemap.xml created in /public');
});
