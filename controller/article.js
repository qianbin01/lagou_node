import BaseController from './baseController'

class Article extends BaseController {
    constructor() {
        super();
        this.list = this.list.bind(this);//绑定this,否则会导致undifined
        this.single = this.single.bind(this);//绑定this,否则会导致undifined
    }

    async list(req, res) {
        let page = req.query.page;
        let result = await this.myFetch('http://127.0.0.1:5000/article/lists', {page: page});
        await res.send(result);
    };

    async single(req, res) {
        let aid = req.query.aid;
        let result = await this.myFetch('http://127.0.0.1:5000/article/single', {aid: aid});
        await res.send(result);
    }
}

export default new Article();