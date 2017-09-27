var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
    // Load CSS string from app to inline it on the header
    const cssString = fs.readFileSync(path.join(__dirname, '../public/stylesheets/dist/app.css'), 'utf8');
    res.render('index', { 
        title: 'Hector Lorenzo – Creative Technologist',
        styles: cssString
    });
});

module.exports = router;
