const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist/asobishindan'));
app.listen(process.env.PORT || 8080);
const path = require('path');
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/asobishindan/index.html'));
});
console.log('Server listening on port 8080');
