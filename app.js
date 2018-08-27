import express from 'express';
import router from './routes/index';
import config from './config'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
// import session from 'express-session';

const app = express();
//解析 application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
//解析 application/json
app.use(bodyParser.json({}));
app.use(cookieParser());
// app.use(session({}));
router(app);
app.listen(config.PORT, function () {
    console.log(`service start on ${config.PORT}`)
});
