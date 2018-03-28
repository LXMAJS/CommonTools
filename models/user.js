/**
 * @author : lxmajs
 */

'use strict'

var sequelize = require('./sequelize');

var User = sequelize.define('User', {
    id: {
        type: Sequelize.BIGINT,
        primaryKey: true
    },
    title: Sequelize.STRING(255),
    coverimg_url: Sequelize.STRING(255),
    create_time: Sequelize.DATETIME
}, {
        timestamps: false
    }
);