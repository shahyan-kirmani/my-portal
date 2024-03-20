module.exports=(sequelize,DataTypes)=>{
    const Event=sequelize.define('event',{
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
        price:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        date:{
            type: DataTypes.DATE,
            allowNull: true,
        },
    })

    return Event

}