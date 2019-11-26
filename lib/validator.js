const {
    LinValidator,
    Rule
} = require("../core/lin-validator-v2");
class PositionValidator extends LinValidator {
    constructor() {
        super();
        this.id = [
            new Rule("isInt", "参数为数字", {
                min: 1
            })
        ]
    }
}

class NickNameValidator extends LinValidator {
    constructor() {
        super();
        this.nickname = [
            new Rule("isLength", "字符长度不符合要求", {
                min: 6,
                max: 16
            })
        ]
    }
}
class HeadValidator extends LinValidator {
    constructor() {
        super();
        this.portrait = [
            new Rule("isLength", "字符长度不符合要求", {
                min: 6
            })
        ]
    }
}
class incrementUserValidator extends NickNameValidator {
    constructor() {
        super();
        this.password = [
            new Rule("isLength", "字符长度不符合要求", {
                min: 6,
                max: 16
            })
        ]
        this.signatrue = [
            new Rule("isLength", "字符长度不符合要求", {
                min: 1,
                max: 128
            })
        ]
        this.age = [
            new Rule("isLength", "字符长度不符合要求", {
                min: 1,
                max: 3
            })
        ]
        this.coord = [
            new Rule("isLength", "字符长度不符合要求", {
                min: 1,
                max: 16
            })
        ]
    }
}
class IncrementDynamicValodator extends LinValidator {
    constructor() {
        super();
        this.nickname = [
            new Rule("isLength", "字符长度不符合要求", {
                min: 6,
                max: 16
            })
        ]
        this.content = [
            new Rule("isLength", "字符长度不符合规范", {
                min: 1,
                max: 128
            })
        ]
        this.pub_date = [
            new Rule('isLength', "字符长度不符合规范", {
                min: 1
            })
        ]
    }
}
module.exports = {
    PositionValidator,
    NickNameValidator,
    IncrementDynamicValodator,
    incrementUserValidator
}