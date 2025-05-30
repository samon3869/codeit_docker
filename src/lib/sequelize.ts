import { Sequelize } from 'sequelize';

const DB_NAME = process.env.DB_NAME || 'db_mbti';
const DB_USERNAME = process.env.DB_USERNAME || 'user_mbti';
const DB_PASSWORD = process.env.DB_PASSWORD || 'pw_mbti';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    dialect: 'sqlite',
    storage: ':memory:',
    dialectModule: require('sqlite3'),
});

export default sequelize;
