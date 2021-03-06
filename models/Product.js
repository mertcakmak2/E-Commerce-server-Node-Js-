const Sequelize = require('sequelize');
const sequelize = require('../database/DbConnection')

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    // companyId:{
    //     type: Sequelize.INTEGER,
    //     allowNull: false,
    //     // defaultValue: 1
    // }
})

module.exports = Product