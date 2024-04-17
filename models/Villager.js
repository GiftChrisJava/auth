module.exports = (sequelize, DataTypes) => {
    const Villager = sequelize.define(
      "villager",
      {
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
  
        contact: {
          type: DataTypes.STRING,
        },
        
        role: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        
      },
      {
        timestamps: false,
      }
    );
  
    return Villager;
  };
  