const file = "db/qb.db";
const sq3 = require('sqlite3');
const db = new sq3.Database(file);

//创建表格数据
db.run("CREATE TABLE IF NOT EXISTS  my_auth_table  (" +
    "_id INTEGER PRIMARY KEY AUTOINCREMENT," +     //字段
    "my_auth_str  TEXT    ," +                     //字段
    "user_phone   TEXT ," +                     //字段
    "create_time   TEXT  " +                     //字段
    ") ");

//生成唯一标识id
function getUUID() {
    return 'xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/[xy]/g, function (c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export default {
    insertAuth: function (phone, uuid) {
        this.deleteData(phone);
        const insert = db.prepare(`INSERT INTO my_auth_table (user_phone,my_auth_str,create_time) VALUES (?,?,?)`); //插入或者替换数据，
        insert.run(phone, uuid, new Date().getTime());
        insert.finalize();
    },
    getUUID: getUUID,
    deleteData: (phone) => {
        const del = db.prepare(`DELETE from my_auth_table where user_phone=?`);
        del.run(phone);
        del.finalize();
    },
    checkAuth: (auth) => {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM my_auth_table where  my_auth_str='${auth}'`, (err, row) => {
                if (row.length > 0) {
                    resolve();
                } else {
                    reject();
                }
            });
        });

    }
}