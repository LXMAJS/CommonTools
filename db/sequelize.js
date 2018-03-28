/**
 * @author : lxmajs
 */

'use strict'

const Sequelize = require('sequelize');
const config = require('./config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// Book 类
var Book = sequelize.define('tbl_book', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement : true
    },
    title: Sequelize.STRING(255),
    coverimg_url: Sequelize.STRING(255),
    create_time: Sequelize.BIGINT
}, {
        timestamps: false
    });

// 添加图书
sequelize.addBook = function addBook(book) {
    console.log('createing: ' + JSON.stringify(book));
    var now = Date.now();
    (async () => {
        var newBook = await Book.create({
            title: book.title,
            coverimg_url: book.coverimg_url,
            create_time: now
        });
        if (newBook) {
            console.log('created: ' + JSON.stringify(newBook));
            return newBook;
        }
    })();
}

module.exports = sequelize;