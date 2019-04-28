//process.argv is an array containing the command line arguments.
//The first element will be 'node', the second element will be the name of the JavaScript file.
//The next elements will be any additional command line arguments.

const url = process.argv[2];

const https = require('https');

const options = {
  hostname: 'www.sofialuisa.xyz',
  port: 443,
  path: '/',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();
