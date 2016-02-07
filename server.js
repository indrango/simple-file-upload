var express = require('express');
var multer = require('multer');
var app = express();

var uploading = multer({
  dest: __dirname + './uploads'
});

var router = app.Router();

router.post('/upload', uploading, function(req, res) {
  console.log('Upload berhasil.');
});

// listener
app.listen(8080, function() {
  console.log('simple-file-upload running at http://localhost:8080');
})
;
