'use strict';

// Since this is used for the ITK Sphinx Examples, which already have bootstrap
// available, do not pack bootstrap.

var copyfiles = require('copyfiles');

var onError = function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
};

copyfiles(['node_modules/bootswatch/cerulean/bootstrap.min.css', 'src/styles/bootswatch/cerulean'], true, onError)
copyfiles(['node_modules/bootswatch/cerulean/bootstrap.min.css', 'dist/styles/bootswatch/cerulean'], true, onError)

copyfiles(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/styles/bootstrap/js'], true, onError)
copyfiles(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'dist/styles/bootstrap/js'], true, onError)

copyfiles(['node_modules/bootswatch/fonts/glyphicons-halflings-regular.woff2', 'src/styles/bootswatch/fonts'], true, onError)
copyfiles(['node_modules/bootswatch/fonts/glyphicons-halflings-regular.woff2', 'dist/styles/bootswatch/fonts'], true, onError)

