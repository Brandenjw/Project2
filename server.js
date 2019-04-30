
//= =====================
// REQUIREMENTS
//= =====================
// require express, method-override, morgan (logging tool), and our routes
const express = require('express')
const app = express()
const methodOverride = require('method-override')
// const logger = require('morgan')
const routes = require('./Routes/index.js')


//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.use("/", routes)
// app.use(






//= =====================
// LISTENERS
//= =====================
// CONNECT MONGOOSE TO "Art Class"
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`we are now connected to ${PORT}`)
})