const Router = require("koa-router");

const router =new Router();

router.get("/", (ctx)=>{
    console.log("欢迎进入后端");
})

module.exports= router;