'use strict';

const path = require('path');
const _ = require('lodash');

let env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

let base = {
    app:{
        root : path.normalize(path.join(__dirname, "/..")),
        env: env,
    },
};

let spectfic = {
    development: {
        app: {
            port: 5000,
            name: "kindlepush-server -  DEV",
            excluded: "excluded_path"
        },
        mysql: {
            host: 'localhost', // 主机名
            port: 3306, // 端口号，MySQL默认3306
            database: 'kindlepush', // 使用哪个数据库
            username: 'kindlepush', // 用户名
            password: 'shabi', // 口令
        }
    }
}