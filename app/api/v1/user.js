const Router = require("koa-router");
const router = new Router({
    prefix: "/v1/user"
})
const {
    PositionValidator,
    NickNameValidator,
    incrementUserValidator
} = require("../../../lib/validator");
const {
    User
} = require("@model/user");
router.post("/register", async (ctx, next) => {
    const v = await new incrementUserValidator().validate(ctx);
    const age = v.get("body.age");
    const nickname = v.get("body.nickname");
    const password = v.get("body.password");
    const signatrue = v.get("body.signatrue");
    const coord = v.get("body.coord");
    await User.AddUser(age, nickname, password, signatrue, coord);
    ctx.body = {
        msg: "用户注册成功",
        errors: "-1",
        code: 200
    };
})


router.post("/:id/edit", async (ctx) => {
    const v = await new PositionValidator().validate(ctx);
    const body = ctx.request.body;
    const id = v.get("path.id");
    await User.update(body, {
        where: {
            id
        }
    });
    ctx.body = {
        msg: "修改成功",
        errors: "-1",
        code: 200
    }
})
router.post("/getAllInfo", async (ctx) => {
    const v = await new NickNameValidator().validate(ctx, {
        nick_name: "nickname"
    })
    const nickname = v.get("body.nickname");
    const data = await User.getInfoByNickName(nickname);
    ctx.body = data;
})

module.exports = router