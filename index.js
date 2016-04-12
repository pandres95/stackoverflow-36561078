'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('me.pandres95.stackoverflow.q36561078', ["booljs-mongoose"])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-mongoose')
    .run();
