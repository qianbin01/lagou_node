import BaseController from './baseController'
import dbController from '../db'

class User extends BaseController {
    constructor() {
        super();
        this.login = this.login.bind(this);//绑定this,否则会导致undifined
    }

    login(req, res) {
        let phone = req.body.phone;
        let uuid = dbController.getUUID();
        dbController.insertAuth(phone, uuid);
        res.json({'qb_auth': uuid, 'phone': phone});
    };
}

export default new User();