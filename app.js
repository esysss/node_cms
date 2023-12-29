const express = require('express')
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const morgan = require("morgan")
const exphds = require("express-handlebars")


//Load the config files (you should make these files)
dotenv.config({ path: "./config/config.env" })

connectDB()

const app = express();

//Log in

if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"))
}

//hanlebars
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

const PORT = process.env.PORT || 5000; // get the config or pick the 5000
app.listen(
    PORT,
    console.log(`the server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)