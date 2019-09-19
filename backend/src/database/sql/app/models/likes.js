module.exports = (sequelize, DataTypes) => {
    const likes = sequelize.define('likes', {
    _id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    id_dev: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'devs',
        key: '_id',
      }
    },
    id_dev_liked: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'devs',
        key: '_id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    createdAt:  DataTypes.DATE,
    updatedAt:  DataTypes.DATE,
    });

    /*likes.associate = function(models) {
      likes.belongsTo(models.devs, {
        foreignKey: 'id_dev'
    })
  }
*/
  return likes;
}