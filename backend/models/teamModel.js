module.exports=(sequelize,DataTypes)=>{
    const Team=sequelize.define('team',{
        userId:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
        designation:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        facebook:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        twitter:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        insta:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    })

    return Team

}