module.exports=(sequelize,DataTypes)=>{
    const User=sequelize.define('user',{
        signAs:{
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
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        agencyName:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        serviceArea:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        agencyDescription:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        agencyLogo:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        status:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        addProperty:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        duration:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        premium:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        packageId:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        packageDate:{
            type: DataTypes.DATE,
            allowNull: true,
        },
        featured:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        subscribe:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        otp:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    })

    return User

}