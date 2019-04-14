const Koa = require('koa');
const app = new Koa();
const koaBody = require('koa-body');
const route = require('koa-route');
const path = require('path');
const serve = require('koa-static');

const main = serve(path.join(__dirname + '/demos'));

const log = ctx => {
  console.log(ctx.request.body);
  ctx.response.body = 'done';
};

app.use(koaBody());
app.use(route.post('/log', log));
app.use(main);

app.listen(3000);
