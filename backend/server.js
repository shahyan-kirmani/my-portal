const express = require('express')
const cors=require('cors')
const cookieParser = require('cookie-parser')
const requestIp = require('request-ip');
const bodyParser = require("body-parser");

const app=express()




// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(requestIp.mw());
app.use(bodyParser.json());


// routers
const userRouter = require('./routes/usersRoutes.js')
const developerRoute = require('./routes/developerRoutes.js')
const agencyRoute = require('./routes/agencyRoutes.js')
const loginRouter = require('./routes/loginRoutes.js')
const contactRouter = require('./routes/contactRoutes.js')
const propertRouter = require('./routes/propertyRoutes.js')
const projectRouter = require('./routes/projectRoutes.js')
const blogRouter = require('./routes/blogRoutes.js')
const eventRouter = require('./routes/eventRoutes.js')
const questionRouter = require('./routes/questionRoutes.js')
const packageRouter = require('./routes/packageRoutes.js')
const teamRouter = require('./routes/teamRoutes.js')
const enquiryRouter = require('./routes/enquiryRoutes.js')
const subscribeRouter = require('./routes/subscribeRoutes.js')
const careerRouter = require('./routes/careerRoutes.js')


app.use('/api/user',userRouter)
app.use('/api/login',loginRouter)

app.use('/api/developer',developerRoute)
// agency or team member 
app.use('/api/agency',agencyRoute)
app.use('/api/team',teamRouter)


app.use('/api/contact',contactRouter)
// property and projects same 
app.use('/api/property',propertRouter)
app.use('/api/project',projectRouter)
// new and blog same just different type
app.use('/api/blog',blogRouter)
app.use('/api/career',eventRouter)
app.use('/api/careerjob',careerRouter)
app.use('/api/question',questionRouter)
app.use('/api/package',packageRouter)
app.use('/api/enquiry',enquiryRouter)
app.use('/api/subscribe',subscribeRouter)

app.use(express.static(__dirname + '/Images'))




// testing
app.get('/',(req,res)=>{
    res.send({ message:'Success'})
})


const PORT=process.env.PORT || 3005;

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})