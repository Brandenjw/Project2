
const user = require("../models/userApi");

const userController = {
    //= =====================
    // INDEX
    //= =====================
    // Create a function sends all users to users/index.hbs view
    index: function (req, res) {
        user.getUsers().then(users => {
            res.render("users/index", { users });
        });
    },
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the new.hbs form
    new: function (req, res) {
        res.render("users/new");
    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single Users show page
    show: function (req, res) {
        user.findById(req.params.id).then(user => {
            res.render("users/show", { user });
        });
    },
    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new user
    // and upon success redirects back to the index page "/"
    create: function (req, res) {
        console.log(req);
        user.create(req.body).then(() => res.redirect("/"));
    },
    //= =====================
    // EDIT
    //= =====================
    // Create a function that renders the edit.hbs page and
    // sends that a Users data to it
    edit: function (req, res) {
        user.findById(req.params.id).then(user => {
            res.render("donuts/edit", { donut });
        });
    },
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the User and
    // redirects back to the SHOW PAGE (not index)
    update: function (req, res) {
        user.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
            res.redirect("/" + req.params.id);
        })
    }
    
 

  
//= =====================
// DELETE
//= =====================
// Create a function that deletes the User and
// redirects back to index page "/"
//     delete: function (req, res) {
//     user.findByIdAndRemove(req.params.id).then(() => {
//         res.redirect("/");
//     });
}


//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = userController;