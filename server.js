
//= =====================
// REQUIREMENTS
//= =====================
// require express, method-override, morgan (logging tool), and our routes
const express = require('express')
const app = express()
const methodOverride = require('method-override')
// const logger = require('morgan')
const routes = require('./routes/user')


//= =====================
// MIDDLEWARE
//= =====================
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'))




//global variable to store list of accounts
let users = [
    { name: "username",
      email: "123abc@gmail.com"

    }
  ];

  app.use("/users", routes)
//= =====================
// Router
//= =====================
// Links the server to our Router File
//Sends back a page with all of the accounts listed (only show their names)
app.get("users/", (req, res) => { });


//Sends back a single page with the details of a single account displayed
app.get("/users/:id", (req, res) => {

  //get the account from the API (Model)
  let userAccount = userApi.getAccountAtId(users, req.params.id);
  
  //create a View on the single account and send it to the user
  //note: { account } the same as writing { account: account }
  res.render("users/:id", { users } ); 
});

//Users POST
//this should add a new POST from req.body to users (global variable)
//and sends back the same page to list all accounts.
app.post("users", (req, res) => {
});

//Users PUT (note here you'll need to put /put at the end of your
//path. This is a work around because HTML forms only allow GET and POST
//requests). Make sure the HTML Form has the pattern: action='.../put' 
app.put("users/:id/put", (req, res) => {
});

//accounts DELETE (note here you'll need to put /delete at the end of your
//path. This is a work around because HTML forms only allow GET and POST
//requests). Make sure the HTML Form has the pattern: action='.../put' 
app.delete("/users/:id/delete", (req, res) => { 
});


//= =====================
// LISTENERS
//= =====================
// CONNECT MONGOOSE TO "Art Class"
const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`we are now connected to ${PORT}`)
})