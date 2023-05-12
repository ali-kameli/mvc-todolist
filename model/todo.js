const { DataTypes } = require('sequelize');

const sequelize = require('../utils/database');

const Todo = sequelize.define('TodoList', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue:false
    }
})

module.exports = Todo;