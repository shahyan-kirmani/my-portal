module.exports=(sequelize,DataTypes)=>{
    const Agency=sequelize.define('Agency',{
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
        cityAgen:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        numberAgen:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        emailAgen:{
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

    return Agency

}