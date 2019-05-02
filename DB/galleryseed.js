//= =====================
// REQUIREMENTS
//= =====================
// Make sure that when you run the seeds file, all of the
// fields are saved to the database.

let Gallery = require('../Models/galleryApi')

let newGallery = [
  {
    username: "powerhouse",
    firstname: "Albert",
    lastname: "Wright",
    email: "abc@123.com",
    comment: "i love art",
    graffitiname: "Lyfe1"
  },
  {
    username: "misterfun",
    firstname: "steve",
    lastname: "roberts",
    email: "456@123.com",
    comment: "hello world",
    graffitiname: "zombie"
  },
  {
    username: "jelloguy",
    firstname: "mike",
    lastname: "jones",
    email: "789@abc.com",
    comment: "jello is everything",
    graffitiname: "2dollaz"
  },
  {
    username: "graffGod",
    firstname: "vayne",
    lastname: "halfdead",
    email: "paint@abc.com",
    comment: "atlanta",
    graffitiname: "4eva"
  }
]
Gallery.remove({})
.then(Gallery.create(newGallery))
.then(Gallery => {
  console.log('Saved Galleries', Gallery)
})