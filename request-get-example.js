// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')               // Note 1
       .on('error', function (err) {                                   // Note 2
         throw err; 
       })
       .on('response', function (response) {                           // Note 3
         console.log('Status Message: ', response.statusMessage);
         console.log('Response Headers: ', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));               // Note 4

// Notes:
// 1. `request.get` is equivalent to `request()`
// 2. `request.on('error', callback)` handles any error
// 3. `request.on('response, callback)` handles the response
// 4. What is happening here?




/* In this exercise you will write a HTTPS client using request to download an
image from the internet.

If you followed the instructions above, you should already have your working
directory with a git repo, package.json, and node_modules folder.

If you don't, please ensure these steps are complete before proceeding. Create
a new .js file and using request, make a 'GET' request to
'https://sytantris.github.io/http-examples/future.jpg' using chaining. The
chain should: Use .on('error') to handle any errors Use .on('response') to log
the HTTPS response code, response message (response.statusMessage) and content
type (response.headers['content-type']) Use piping and fs.createWriteStream to
save the file to your working directory ('./future.jpg')

*/