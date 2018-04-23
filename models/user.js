/**
 * @author : lxmajs
 */

'use strict'

const Sequelize = require('sequelize');
var sequelize = require('../db/sequelize');

var User = sequelize.define('User', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    wxid: Sequelize.STRING(255),
    nickname: Sequelize.STRING(255),
    email: Sequelize.STRING(255),
    email_sendpwd: Sequelize.STRING(255),
    create_time: Sequelize.DATETIME
}, {
        timestamps: false
    });

function addUser(user) {
    var now = Date.now();
    (async () => {
        var newUser = await User.create({
            nickname: user.nickname,
            wxid : user.wxid,
            create_time: now
        });
        console.log('created: ' + JSON.stringify(newUser));
    })();
}

module.exports = User;