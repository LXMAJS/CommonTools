// /**
//  * @author : lxmajs
//  */

// 'use strict'

// const Sequelize = require('sequelize');
// var sequelize = require('../db/sequelize');

// var Book = sequelize.define('Book', {
//     id: {
//         type: Sequelize.BIGINT,
//         primaryKey: true
//     },
//     title: Sequelize.STRING(255),
//     coverimg_url: Sequelize.STRING(255),
//     create_time: Sequelize.DATETIME
// }, {
//         timestamps: false
//     });

// function addBook(book) {
//     var now = Date.now();
//     (async () => {
//         var newBook = await Book.create({
//             id: 'd-' + now,
//             title: book.title,
//             coverimg_url: book.coverimg_url,
//             create_time: now
//         });
//         console.log('created: ' + JSON.stringify(newBook));
//     })();
// }

// module.exports = Book;