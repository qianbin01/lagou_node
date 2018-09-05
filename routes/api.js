import express from 'express'
// import recruit from 'recruit'
// import company from 'company'
import Article from '../controller/article'
import User from '../controller/user'

const router = express.Router();

router.get('/article/list', Article.list);
router.get('/article/single', Article.single);

router.get('/user/login', User.login);
router.post('/user/register', User.register);


export default router