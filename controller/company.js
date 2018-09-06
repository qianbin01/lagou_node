import BaseController from './baseController'

class Company extends BaseController {
    constructor() {
        super();
        this.list = this.list.bind(this);//绑定this,否则会导致undifined
        this.single = this.single.bind(this);
    }

    async list(req, res) {
        let page = req.query.page;
        let result = await this.myFetch('/company/lists', {page: page});
        await res.send(result);
    };

    async single(req, res) {
        let cid = req.query.cid;
        let result = await this.myFetch('/company/single', {cid: cid});
        await res.send(result);
    }
}

export default new Company();