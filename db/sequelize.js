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
var Book = sequelize.define('Book', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    title: Sequelize.STRING(255),
    coverimg_url: Sequelize.STRING(255),
    create_time: Sequelize.BIGINT
}, {
        timestamps: false
    });

// 添加图书
function addBook(book) {
    console.log('createing: ' + JSON.stringify(newBook));
    var now = Date.now();
    (async () => {
        var newBook = await Book.create({
            id: 'd-' + now,
            title: book.title,
            coverimg_url: book.coverimg_url,
            create_time: now
        });
        console.log('created: ' + JSON.stringify(newBook));
    })();
}

module.exports = sequelize;