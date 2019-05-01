const Appt = require("../Models/appointmentApi");

const scheduleController = {
    //= =====================
    // INDEX
    //= =====================
    // Create a function sends all users to /schedule view
    index: function (req, res) {
        Appt.find().then(time => {(time)
            console.log("TESSSSSSSTTTTT")
            console.log(time)
            res.render("schedule", {time });
        });
    },
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the schedule.hbs form
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
            res.render("/user/show", { user });
        });
    },
    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new schedule
    // and upon success redirects back to the index page "/"
    create: function (req, res) {
        console.log(req);
        Appt.create(req.body)
        .then(() => {
            res.redirect("schedule");
    })}
    ,




   
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the User and
    // redirects back to the SHOW PAGE (not index)
    update: function (req, res) {
        Appt.findByIdAndUpdate(req.params.uid, req.body)
        .then(() => {
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