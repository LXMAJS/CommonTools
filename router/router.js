/**
 * @author : lxmajs
 */

'use stirct'

// 注意require('koa-router')返回的是函数:
var router       = require('koa-router')();
var sequelize    = require('../db/db');
var mailSender   = require('../module/nodemailer/mail');

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});


router.get('/send', async (ctx, next) => {
    mailSender('lxmajs@163.com', 'Hello', 'Hello world!', [{ filename: 'attach1.sql', path: './kindlepush.sql'}]);
    ctx.response.body = '<h1>Send OK</h1>';
});


// 添加一本书
router.get('/addBook', async (ctx, next) => {
    sequelize.addBook({
        title : 'New Book 2'
    });
    ctx.response.body = 'Created a new book.';
});

module.exports = router;