const fs = require('fs');
const http = require('http');
const url = require('url');

// SERVER + ROUTING
const templateIndex = fs.readFileSync(
  `${__dirname}/templates/template-index.html`,
  'utf-8'
);
const templateNewItem = fs.readFileSync(
  `${__dirname}/templates/template-new-item.html`,
  'utf-8'
);
const templateReports = fs.readFileSync(
  `${__dirname}/templates/template-reports.html`,
  'utf-8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/prices.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  // INICIO
  if (pathname === '/' || pathname === '/inicio') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(templateIndex);

    // NOVO ITEM
  } else if (pathname === '/novo-item') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(templateNewItem);

    // RELATÓRIOS
  } else if (pathname === '/relatorios') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(templateReports);

    // API
  } else if (pathname === '/api') {
    fs.readFile(`${__dirname}/dev-data/prices.json`, 'utf-8', (err, data) => {
      const pricesData = JSON.parse(data);
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(data);
    });

    // NOT FOUND
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening to requests on port 3000');
});
