module.exports=(sequelize,DataTypes)=>{
    const Enquiry=sequelize.define('enquiry',{
        userId:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        message:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    })

    return Enquiry

}