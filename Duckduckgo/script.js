//uitklappen social media

const speakerBtn = document.querySelector(".social-media");
const dropdownMenu = document.querySelector(".toggle-menu");

const toggleMenu = () => {
  dropdownMenu.classList.toggle("visible");
}

speakerBtn.addEventListener("click", toggleMenu);

//uitklappen navigatie menu
const navBtn = document.querySelector(".fa-bars");
const navMenu = document.querySelector(".nav-menu");

const navMenuAppear = () => {
  navMenu.classList.add("appeared-menu");
}

navBtn.addEventListener("click", navMenuAppear);

//terugklappen navigatie menu
const xBtn = document.querySelector(".fa-times");

const navMenuRollback = () => {
  navMenu.classList.remove("appeared-menu");
}

xBtn.addEventListener("click", navMenuRollback)

//verschijnen "leer meer"

const learnBtn = document.querySelector(".learn-btn");
const learnComment = document.querySelector(".learn-comment");

const learnCommentAppear = () => {
  learnComment.classList.add("visible")
}

const learnCommentGone = () => {
  learnComment.classList.remove("visible")
}

learnBtn.addEventListener("mouseover", learnCommentAppear)
learnBtn.addEventListener("mouseout", learnCommentGone)
