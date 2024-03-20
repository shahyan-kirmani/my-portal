module.exports=(sequelize,DataTypes)=>{
    const Contact=sequelize.define('contact',{
        yourMessage:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        fullName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        subject:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
    })

    return Contact

}