const Gall = require("../Models/galleryApi");

const gallController = {
    //= =====================
    // INDEX
    //= =====================
    // Create a function sends all users to users/index.hbs view
    index: function (req, res) {
        Gall.find().then(user => {
            console.log(user)
            res.render("gallery", { user });
        });
    },
    //= =====================
    // NEW
    //= =====================
    // Create a function that renders the new.hbs form
    new: function (req, res) {
        res.render("gallery/new");
    },
    //= =====================
    // SHOW
    //= =====================
    // Create a function that renders a single Users show page
    show: function (req, res) {
        Gall.findById(req.params.uid).then(user => {
            console.log(user)
            res.render("gallery/show", { user });
        });
    },
    //= =====================
    // CREATE
    //= =====================
    // Create a function that creates a new user
    // and upon success redirects back to the index page "/"
    create: function (req, res) {
        console.log(req.body);
        Gall.create(req.body)
        // Gall.findById(req.body.id)
        .then(user => {
            console.log(user)
            res.render("userAdded", {user});
    })}
    ,




   
    //= =====================
    // UPDATE
    //= =====================
    // Create a function that updates the User and
    // redirects back to the SHOW PAGE (not index)
    update: function (req, res) {
        Gall.findByIdAndUpdate(req.params.id, req.body).then(() => {
            res.redirect(`/gallery/${req.params.id}`);
        });
    },
    
 

  
//= =====================
// DELETE
//= =====================
//  Create a function that deletes the User and
//  redirects back to index page "/"
     delete: function (req, res) {
         console.log(req)
     Gall.findByAndRemove(req.params.id).then(() => {
         res.redirect("/gallery");
    });
},
}


//= =====================
// EXPORTS
//= =====================
// export the controller with module.exports
module.exports = gallController;