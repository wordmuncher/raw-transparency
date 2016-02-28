## Blocking
type `node blocking.js` into the console.
Open up your browser and navigate to http://localhost:8080/wait.
Then navigate to http://localhost:8080 - the browser will hang

## Callbacks
type `node nonblocking.js` into the console.
Open up your browser and navigate to http://localhost:8080/wait.
Then navigate to http://localhost:8080 - the browser will not hang!

## More Interesting Callback Example
type `node fileReader.js` into the console.
Open up your browser and navigate to http://localhost:8080.
The browser should show a printout of "myfile.txt"
