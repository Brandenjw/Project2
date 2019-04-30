const Appt = require("../Models/appointmentApi");

const scheduleController = {
    //= =====================
    // INDEX
    //= =====================
    // Create a function sends all users to users/index.hbs view
    index: function (req, res) {
        Appt.getUsers().then(users => {
            res.render("user/index", { users });
        });
    },
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the new.hbs form
    new: function (req, res) {
        res.render("schedule");
    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single Users show page
    show: function (req, res) {
        Appt.findById(req.params.uid).then(user => {
            console.log(user)
            res.render("user/show", { user });
        });
    },
    //= =====================
    // CREAT
    //= =====================
    // Create a function that creates a new user
    // and upon success redirects back to the index page "/"
    create: function (req, res) {
        console.log(req);
        Appt.create(req.body)
        .then(user => {
            res.redirect("/user/" + user._id);
    })}
    ,




   
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the User and
    // redirects back to the SHOW PAGE (not index)
    update: function (req, res) {
        Appt.findByIdAndUpdate(req.params.id, req.body).then(() => {
            res.redirect(`/user/${req.params.id}`);
        });
    },
    
 

  
//= =====================
// DELETE
//= =====================
//  Create a function that deletes the User and
//  redirects back to index page "/"
     delete: function (req, res) {
         console.log(req)
         Appt.findByIdAndDelete(req.params.id).then(() => {
         res.redirect("/");
    });
},
}


//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = scheduleController;