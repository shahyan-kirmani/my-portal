module.exports=(sequelize,DataTypes)=>{
    const Package=sequelize.define('package',{
        title:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        duration:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        price:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        addProperty:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    })

    return Package

}