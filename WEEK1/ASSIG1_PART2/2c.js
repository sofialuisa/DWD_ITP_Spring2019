
//reading a text file lines and writing a random html file out of it.
// text file = "machines" by Michael Donaghy
//sofia suazo
//april 2019

//read lines of text file
var fs = require('fs');
var textByLine = fs.readFileSync('machines.txt').toString().split("\n");
console.log(textByLine);


//select random lines of the text file and store them
let random_line;
let paragraph = [];
for (i=0; i<=10; i++){
random_line = '<p/>' + textByLine[Math.floor(Math.random(textByLine.lenght)*10)] + '</p>';
paragraph += random_line;
}

// use the paragraph of random lines as the body of the html content
let content = '<html><head><body/>' + paragraph + '</body></head></html>';

//passing the content variable in the html file that is being created
fs.writeFile('index_part2_3.html', content, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
