'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('likes', {
      _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_dev: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      id_dev_target: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'devs',
          key: '_id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      liked: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('likes');
  }
};