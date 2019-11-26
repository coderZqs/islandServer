const errors =require("../core/http-exception");
class InitManager {
    constructor() {

    }
    Init(app, Router) {
        this.InitManagerRouters(app, Router);
        this.configGlobal();
    }
    configGlobal (){
            global.errs= errors;
    }
    InitManagerRouters(app, Router) {

        const apiDirectory = "../app/api"
        const requireDirectory = require("require-directory");
        requireDirectory(module, apiDirectory, {
            visit: apirequireDirectory
        })

        function apirequireDirectory(obj) {
            if (obj instanceof Router) {
                app.use(obj.routes())
            }
        }
    }
}

module.exports = InitManager