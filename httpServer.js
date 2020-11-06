const Koa = require('koa');
const app = new Koa();

const Router = require('koa-router');
const homeRouter = new Router();

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const path = require('path');
const static = require('koa-static');
const staticPath = './static';

app.use(static(path.join(__dirname, staticPath)));

homeRouter
    .get('./', async (ctx) => {})
    .get('/echo', async (ctx) => {
        ctx.body = ctx.req.body;
    })
    .get('/cmd', async (ctx) => {
        console.log(ctx.request.host);
        console.log('heya------------------------');
        console.log(ctx.request.url);
        console.log('heya------------------------');
        console.log(JSON.stringify(ctx.request.query));
        ctx.body = ctx.request.query;
    });

app.use(homeRouter.routes()).use(homeRouter.allowedMethods());

app.use(async (ctx) => {
    ctx.body = 'Hello, http service on going...';
});

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000');
});
