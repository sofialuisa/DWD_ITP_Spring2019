// randomly generated HTML page using node.js
// Sofía Suazo
// April 2019

//dictionary for header and paraghaph options
//gives you the classic hello world! in english, spanich of french
var title_body_dict = {
  0: "<h1/>Hello World!</h1> <p>This a node.js randomly generated html page</p>",
  1: "<h1/>Hola Mundo!</h1> <p>Esta es una página html generada al azar usando node.js</p>",
  2: "<h1/>Salut Monde!</h1> <p>Ceci est une page HTML générée aléatoirement par node.js</p>"
};

//variable that choses from the dictionary and stores it.
let title_body = '<body/>' + title_body_dict[Math.floor(Math.random(title_body_dict)*3)]+ '</body>';

// builder for the content of the page
let content = '<html><head>' + title_body + '</head></html>';

//contructing the html page
var fs = require('fs');
//passing the content variable in the html file that is being created
fs.writeFile('index_part2_2.html', content, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
