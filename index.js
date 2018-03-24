/*

@author: lxmajs@163.com
@time: 2018-03-18

*/

// 'use strict'

// var greet = require('./module/hello');

// var s = 'lxmajs';

// // use a function g=from greet
// greet(s);

'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);
