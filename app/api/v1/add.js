/* const Router = require("koa-router");
const fs = require("fs")
const path = require("path")

const router = new Router()

router.get("/", async (ctx) => {
      const content = await new Promise((res, rej) => {
            fs.readFile(process.cwd() + "/public/index.html", (err, data) => {
                  if (err) {
                        rej(err)
                  }
                  res(data.toString())
            })
      })
      ctx.body = content
})

module.exports = router; */