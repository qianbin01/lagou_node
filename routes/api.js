import express from 'express'
// import recruit from 'recruit'
// import company from 'company'
// import article from 'article'
import User from '../controller/user'

const router = express.Router();

router.get('/login', User.login);


export default router