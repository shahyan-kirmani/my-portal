module.exports=(sequelize,DataTypes)=>{
    const Question=sequelize.define('question',{
        question:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        answer:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        
    },
    // {
    //     timestamps:false
    // }
    )

    return Question

}