module.exports=(sequelize,DataTypes)=>{
    const Subscribe=sequelize.define('subscribe',{
        email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    })

    return Subscribe

}