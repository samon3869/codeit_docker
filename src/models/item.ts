import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    mbti: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    colorCode: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Item;
