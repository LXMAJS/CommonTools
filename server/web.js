/**
 * @author      : lxmajs
 * @description ： web应用的起点
 */

'use stirct'

const Koa    = require('koa');
const router = require('../router/router');
const app    = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// add router middleware:
app.use(router.routes());

// start web server
function start() {
    app.listen(3000);
    console.log('app started at port 3000...');
}

module.exports = start;