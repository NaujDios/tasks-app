
express = require('express')
homeRoutes = require('./routes/index')
path = require('path')
morgan = require('morgan')


app = express()



//setings
app.set('port', 3000)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))

//Routes
app.use(homeRoutes)


//Static Files
app.use(express.static(path.join(__dirname, "public")))



module.exports = app