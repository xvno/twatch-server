const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const moteRouter = new Router();
const apiRouter = new Router();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const path = require('path');
const static = require('koa-static');
const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));

let step;
moteRouter
    .get('/cmd', async (ctx) => {
        console.log(JSON.stringify(ctx.request.query));
        ctx.body = ctx.request.query;
        step = ctx.request.query.step;
    })
    .get('/cmd/reset', async (ctx) => {
        step = 0;
    });

app.use(moteRouter.routes()).use(moteRouter.allowedMethods());
// control panel
apiRouter.get('/api/step', async (ctx) => {
    ctx.body = { step };
});

app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

app.use(async (ctx) => {
    ctx.body = 'Hello, http service on going...';
});

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000');
});
