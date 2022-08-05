/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var call = require('./callbackReview.js');
var Prom = require('./promisification.js');
Promise.promisifyAll(call);
Promise.promisifyAll(fs);



var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  var test = call.pluckFirstLineFromFileAsync;
  var test2 = Prom.getGitHubProfileAsync;
  var test3 = fs.writeFile;
  return test(readFilePath)
    .then((data) => { return test2(data); })
    .then((data)=> fs.writeFileAsync(writeFilePath, JSON.stringify(data)))
    .catch((err) => { console.error(err); });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
