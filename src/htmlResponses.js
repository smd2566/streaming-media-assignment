//const fs = require('fs'); // pull in the file system module

//const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response, htmlFile) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(require('fs').readFileSync(`${__dirname}/../client/${htmlFile}`));
  response.end();
};

const getClient1 = (request, response) => {
  getIndex(request, response, 'client.html');
};

const getClient2 = (request, response) => {
  getIndex(request, response, 'client2.html');
};

const getClient3 = (request, response) => {
  getIndex(request, response, 'client3.html');
};


module.exports.getClient1 = getClient1;
module.exports.getClient2 = getClient2;
module.exports.getClient3 = getClient3;
