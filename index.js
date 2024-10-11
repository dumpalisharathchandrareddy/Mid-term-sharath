// About gallery Publications Hobbies Blog
console.log("opop");


showAbout()

function showAbout() {

   const about = document.getElementById("About")
   const gallery = document.getElementById("gallery")
   const publications = document.getElementById("Publications")
   const hobbies = document.getElementById("Hobbies")
   const blog = document.getElementById("Blog")

   const galleryButton = document.getElementById("gallery-button");
   const publicationsButton = document.getElementById("publications-button");
   const hobbiesButton = document.getElementById("hobbies-button");
   const blogButton = document.getElementById("blog-button");
   const aboutButton = document.getElementById("about-button");

   aboutButton.className = "selected-button";
   galleryButton.className = "un-selected-button";
   publicationsButton.className = "un-selected-button";
   hobbiesButton.className = "un-selected-button";
   blogButton.className = "un-selected-button";

   about.style.display = "grid"
   gallery.style.display = "none"
   publications.style.display = "none"
   hobbies.style.display = "none"
   blog.style.display = "none"
}

function showGallery() {

   const about = document.getElementById("About")
   const gallery = document.getElementById("gallery")
   const publications = document.getElementById("Publications")
   const hobbies = document.getElementById("Hobbies")
   const blog = document.getElementById("Blog");

   const galleryButton = document.getElementById("gallery-button");
   const publicationsButton = document.getElementById("publications-button");
   const hobbiesButton = document.getElementById("hobbies-button");
   const blogButton = document.getElementById("blog-button");
   const aboutButton = document.getElementById("about-button");

   galleryButton.className = "selected-button";
   publicationsButton.className = "un-selected-button";
   hobbiesButton.className = "un-selected-button";
   blogButton.className = "un-selected-button";
   aboutButton.className = "un-selected-button";

   about.style.display = "none"
   gallery.style.display = "block"
   publications.style.display = "none"
   hobbies.style.display = "none"
   blog.style.display = "none"
}

function showPublications() {
   const about = document.getElementById("About")
   const gallery = document.getElementById("gallery")
   const publications = document.getElementById("Publications")
   const hobbies = document.getElementById("Hobbies")
   const blog = document.getElementById("Blog")

   const galleryButton = document.getElementById("gallery-button");
   const publicationsButton = document.getElementById("publications-button");
   const hobbiesButton = document.getElementById("hobbies-button");
   const blogButton = document.getElementById("blog-button");
   const aboutButton = document.getElementById("about-button");

   publicationsButton.className = "selected-button";
   galleryButton.className = "un-selected-button";
   hobbiesButton.className = "un-selected-button";
   blogButton.className = "un-selected-button";
   aboutButton.className = "un-selected-button";

   about.style.display = "none"
   gallery.style.display = "none"
   publications.style.display = "block"
   hobbies.style.display = "none"
   blog.style.display = "none"
}

function showHobbies() {

   const about = document.getElementById("About")
   const gallery = document.getElementById("gallery")
   const publications = document.getElementById("Publications")
   const hobbies = document.getElementById("Hobbies")
   const blog = document.getElementById("Blog")

   const galleryButton = document.getElementById("gallery-button");
   const publicationsButton = document.getElementById("publications-button");
   const hobbiesButton = document.getElementById("hobbies-button");
   const blogButton = document.getElementById("blog-button");
   const aboutButton = document.getElementById("about-button");

   publicationsButton.className = "un-selected-button";
   galleryButton.className = "un-selected-button";
   hobbiesButton.className = "selected-button";
   blogButton.className = "un-selected-button";
   aboutButton.className = "un-selected-button";

   about.style.display = "none"
   gallery.style.display = "none"
   publications.style.display = "none"
   hobbies.style.display = "block"
   blog.style.display = "none"
}

function showBlogs() {

   const about = document.getElementById("About")
   const gallery = document.getElementById("gallery")
   const publications = document.getElementById("Publications")
   const hobbies = document.getElementById("Hobbies")
   const blog = document.getElementById("Blog")

   const galleryButton = document.getElementById("gallery-button");
   const publicationsButton = document.getElementById("publications-button");
   const hobbiesButton = document.getElementById("hobbies-button");
   const blogButton = document.getElementById("blog-button");
   const aboutButton = document.getElementById("about-button");

   publicationsButton.className = "un-selected-button";
   galleryButton.className = "un-selected-button";
   hobbiesButton.className = "un-selected-button";
   blogButton.className = "selected-button";
   aboutButton.className = "un-selected-button";

   about.style.display = "none"
   gallery.style.display = "none"
   publications.style.display = "none"
   hobbies.style.display = "none"
   blog.style.display = "block"
}

