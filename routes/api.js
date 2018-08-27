import express from 'express'
// import recruit from 'recruit'
// import company from 'company'
// import article from 'article'
import User from '../controller/user'

const router = express.Router();

router.get('/user/login', User.login);
router.post('/user/register', User.register);

export default router