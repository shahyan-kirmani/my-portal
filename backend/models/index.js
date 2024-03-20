const dbConfig = require('../config/dbConfig.js')
const {Sequelize,DataTypes}=require('sequelize')


const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases:false,
        pool:{
            max:dbConfig.pool.max,
            min:dbConfig.pool.min,
            idle:dbConfig.pool.idle,
            acquire:dbConfig.pool.acquire,
        }
    }
)


sequelize.authenticate().then(()=>{
    console.log('Connected to database')
    console.log('Creating tables')
}).catch((err)=>{
    console.log(err)
})


const db={}
db.Sequelize=Sequelize
db.sequelize=sequelize


db.users=require('./userModel.js')(sequelize,DataTypes)
db.developer=require('./developerModel.js')(sequelize,DataTypes)
db.contact=require('./contactModel.js')(sequelize,DataTypes)
db.question=require('./questionModel.js')(sequelize,DataTypes)
db.property=require('./propertyModel.js')(sequelize,DataTypes)
db.project=require('./projectModel.js')(sequelize,DataTypes)
db.blog=require('./blogModel.js')(sequelize,DataTypes)
db.event=require('./eventModel.js')(sequelize,DataTypes)
db.team=require('./teamModel.js')(sequelize,DataTypes)
db.package=require('./packageModel.js')(sequelize,DataTypes)
db.enquiry=require('./enquiryModel.js')(sequelize,DataTypes)
db.subscribe=require('./subscribeModel.js')(sequelize,DataTypes)
db.career=require('./careerModel.js')(sequelize,DataTypes)



db.sequelize.sync({force:false}).then(()=>{
    console.log('Yes Re-Sync Complete')
})



// post to many relationship

db.users.hasMany(db.property,{
    foreignKey:'userId',
    as:'property',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})

db.property.belongsTo(db.users,{
    foreignKey:'userId',
    as:'users',
    onDelete:'CASCADE',
    onUpdate:'CASCADE',
})




module.exports=db