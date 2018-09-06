import BaseController from './baseController'

class Recruit extends BaseController {
    constructor() {
        super();
        this.list = this.list.bind(this);//绑定this,否则会导致undifined
        this.single = this.single.bind(this);//绑定this,否则会导致undifined
    }

    async list(req, res) {
        let page = req.query.page;
        let result = await this.myFetch('/recruit/lists', {page: page});
        await res.send(result);
    };

    async single(req, res) {
        let rid = req.query.rid;
        let result = await this.myFetch('/recruit/single', {rid: rid});
        await res.send(result);
    }
}

export default new Recruit();