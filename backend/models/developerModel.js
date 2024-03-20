module.exports=(sequelize,DataTypes)=>{
    const Developer=sequelize.define('developer',{
        userId:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        nameHeading:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        subAbout:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        cityDev:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        numberDev:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        emailDev:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        imageLogo:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        Location:{
            type: DataTypes.TEXT,
            allowNull: true,
        },
    })

    return Developer

}