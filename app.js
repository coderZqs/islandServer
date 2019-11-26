require("module-alias/register");
const Koa = require("koa");
const {
    historyApiFallback
} = require('koa2-connect-history-api-fallback')

const app = new Koa();
const Router = require("koa-router");
const InitManager = require("./core/init")
const exception = require("./middlewawe/exception")
const bodyParser = require("koa-bodyparser");
app.use(historyApiFallback());
app.use(bodyParser())
app.use(exception);
new InitManager().Init(app, Router);
app.use(require('koa-static')(__dirname + '/public'));
app.listen(80);