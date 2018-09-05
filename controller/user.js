import BaseController from './baseController'

class User extends BaseController {
    constructor() {
        super();
        this.login = this.login.bind(this);//绑定this,否则会导致undifined
        this.register = this.register.bind(this);//绑定this,否则会导致undifined
    }

    async login(req, res) {
        await res.send('123');
    };

    async register(req, res) {
        await res.send('123');
    }
}

export default new User();