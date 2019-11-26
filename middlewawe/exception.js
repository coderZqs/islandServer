const {
    HttpException
} = require("../core/http-exception")

const exception = async (ctx, next) => {

    try {
        await next();
    } catch (error) {
        console.log(error)
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                errorCode: error.code,
                code: error.errorCode
            }
        }
    }
}
module.exports = exception;