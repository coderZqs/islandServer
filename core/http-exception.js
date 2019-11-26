class HttpException extends Error {

    constructor(msg = "请求失败", errorCode = 10000, code = 400) {
        super();
        this.msg = msg;
        this.errorCode = errorCode;
        this.code = code;
    }
}


class ParameterException extends HttpException {
    constructor(msg, errorCode) {
        super()
        this.code = 400
        this.msg = msg || '参数错误'
        this.errorCode = errorCode || 10000
    }
}


class NotFound extends HttpException {
    constructor(msg) {
        super();
        this.msg = "Not Found",
            this.errorCode = 10006,
            this.code = 400
    }
}
module.exports = {
    HttpException,
    ParameterException,
    NotFound
}