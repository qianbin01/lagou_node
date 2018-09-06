import express from 'express'
import Article from '../controller/article'
import Comment from '../controller/comment'
import Company from '../controller/company'
import News from '../controller/news'
import Recruit from '../controller/recruit'
import Topic from '../controller/topic'
import CommentUser from '../controller/commentUser'
import User from '../controller/user'

const router = express.Router();

//文章
router.get('/article/list', Article.list);
router.get('/article/single', Article.single);

//评论
router.get('/comment/list', Comment.list);

//公司
router.get('/company/list', Company.list);
router.get('/company/single', Company.single);

//新闻
router.get('/news/list', News.list);
router.get('/news/single', News.single);

//职位
router.get('/recruit/list', Recruit.list);
router.get('/recruit/single', Recruit.single);

//话题
router.get('/topic/list', Topic.list);
router.get('/topic/single', Topic.single);

//评论用户
router.get('/comment_users/list', CommentUser.list);

//用户
router.get('/user/login', User.login);
router.post('/user/register', User.register);


export default router