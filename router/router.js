/**
 * @author : lxmajs
 */

'use stirct'

// 注意require('koa-router')返回的是函数:
var router       = require('koa-router')();
var sequelize    = require('../db/sequelize');

// add url-route:
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});

router.get('/', async (ctx, next) => {
    ctx.response.body = '<h1>Index</h1>';
});


// 添加一本书
router.get('/addBook', async (ctx, next) => {
    sequelize.addBook({
        title : 'New Book 2'
    });
    ctx.response.body = 'Created a new book.';
});

module.exports = router;