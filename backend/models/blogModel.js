module.exports=(sequelize,DataTypes)=>{
    const Blog=sequelize.define('blog',{
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
    })

    return Blog

}