import BaseController from './baseController'

class User extends BaseController {

    async login(req, res, next) {
        await console.log(next);
        res.send({
            status: 200,
            message: '登录成功',
        })
    };

    async register(req, res, next) {
        await console.log(next);
        res.send({
            status: 200,
            message: '注册成功',
        })
    }
}

export default new User();