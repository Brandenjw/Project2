
const express = require('express');
const app = express();
const methodOverride = require('method-override');


// const userApi = require('./api/userApi.js');
// const accountApi = require('./api/waysApi.js');
//sets up hbs
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));
//setup middleware for handling html forms
//where body is a query string 
app.use(express.urlencoded());


app.use(methodOverride('_method'))

//linking server to router files
app.use('/', routes)


app.get('/', (req, res) => {
    res.render("user")
});











//connecting to project 2 work
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("");
});