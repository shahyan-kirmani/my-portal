module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define('project', {
        image: {
            type: DataTypes.TEXT, // or DataTypes.STRING
            defaultValue: '[]',
            get() {
              const value = this.getDataValue('image');
              return value ? JSON.parse(value) : [];
            },
            set(value) {
              this.setDataValue('image', JSON.stringify(value));
            }
          },
        myLike: {
            type: DataTypes.TEXT, // or DataTypes.STRING
            defaultValue: '[]',
            get() {
              const value = this.getDataValue('myLike');
              return value ? JSON.parse(value) : [];
            },
            set(value) {
              this.setDataValue('myLike', JSON.stringify(value));
            }
          },
        video: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        purpose: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        property: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        developers: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        beds: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        baths: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        feature: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        landline: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        featured:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        state:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        

    })

    return Project

}