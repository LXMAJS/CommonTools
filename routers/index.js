const router = new Router();

router.get('/', async (ctx, next) => {
    // ctx.type = 'html'
    // ctx.body = require('fs').createReadStream(__dirname + '/../public/main.html')

    await ctx.render('./main');
})

router.use('/pusher',  RouterPusher.routes(), RouterPusher.allowedMethods())

router.get('*', async (ctx, next) => {
    ctx.body = { status : 404 }
})

module.exports = function routes() {
    return compose(
        [
            router.routes(),
            router.allowedMethods()
        ]
    )
}