import BaseController from './baseController'

class News extends BaseController {
    constructor() {
        super();
        this.list = this.list.bind(this);//绑定this,否则会导致undifined
        this.single = this.single.bind(this);//绑定this,否则会导致undifined
    }

    async list(req, res) {
        let page = req.query.page;
        let result = await this.myFetch('/news/lists', {page: page});
        await res.send(result);
    };

    async single(req, res) {
        let nid = req.query.nid;
        let result = await this.myFetch('/news/single', {nid: nid});
        await res.send(result);
    }
}

export default new News();