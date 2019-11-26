const Router = require("koa-router");

const {
    NickNameValidator,
    IncrementDynamicValodator
} = require("@validator")
const router = new Router({
    prefix: "/v1/dynamic"
})

const {
    Dynamic
} = require("@model/dynamic");

router.get("/alldynamic", async ctx => {
    const data = await Dynamic.getAllDynamic();
    ctx.body = data;
})
router.get("/detail", async (ctx, next) => {
    const v = await new NickNameValidator().validate(ctx, {
        nick_name: "nickname"
    })
    const nickname = v.get("query.nickname");
    const data = await Dynamic.findDynamicByNickName(nickname);
    ctx.body = data;
})

router.post("/incrementdynamic", async (ctx) => {
    const v = await new IncrementDynamicValodator().validate(ctx);
    const nickname = v.get("body.nickname");
    const content = v.get("body.content");
    const pub_date = v.get("body.pub_date");

    await Dynamic.incrementDynamic(nickname, content, pub_date);
    ctx.body = {
        msg: "添加成功",
        code: 200,
        error: -1
    }
})


module.exports = router;