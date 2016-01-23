var express = require('express');
var multer = require('multer');
var app = express();
// set up storage
var storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './uploads');
  },
  filename: function(req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
// set up upload
var upload = multer({ storage: storage }).single('userPhoto');

// midlleware
app.use(express.static(__dirname + '/bower_components'));

// route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/api/photo', function(req, res) {
  upload(req, res, function(err) {
    if (err)
      return res.end('Error uploading file!');

    res.end('File is uploaded')
  });
});

// listener
app.listen(8080, function() {
  console.log('simple-file-upload running at http://localhost:8080');
})
;
