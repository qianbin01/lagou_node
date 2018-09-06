import BaseController from './baseController'

class Topic extends BaseController {
    constructor() {
        super();
        this.list = this.list.bind(this);//绑定this,否则会导致undifined
        this.single = this.single.bind(this);//绑定this,否则会导致undifined
    }

    async list(req, res) {
        let page = req.query.page;
        let result = await this.myFetch('/topic/lists', {page: page});
        await res.send(result);
    };

    async single(req, res) {
        let tid = req.query.tid;
        let result = await this.myFetch('/topic/single', {tid: tid});
        await res.send(result);
    }
}

export default new Topic();