const siteBtns = Array.from(document.querySelectorAll(".site"));
const gitClientBtns = Array.from(document.querySelectorAll(".git-client"))
const projectSiteBtns = Array.from(document.querySelectorAll(".project-site-btns"))

//general function for class switching buttons
const switchButton = (e, btn) => {
  btn.forEach(button => {
    if(e.target === button) {
      button.classList.remove("not-active")
      button.classList.add("active")
    } else {
      button.classList.remove("active")
      button.classList.add("not-active")
    }
  })
}

//switching site buttons
const switchButtonSite = (e) => {
  switchButton(e, siteBtns)
}

siteBtns.forEach(button => button.addEventListener("click", switchButtonSite))

//switching git client buttons
const switchButtonGit = (e) => {
  switchButton(e, gitClientBtns)
}

gitClientBtns.forEach(button => button.addEventListener("click", switchButtonGit))

//switching second choice buttons of project site
const switchSecondChoice = (e) => {
  switchButton(e, projectSiteBtns)
}

projectSiteBtns.forEach(button => button.addEventListener("click", switchSecondChoice))

//general function for adding lists
const addLists = (e, list) => {
  list.forEach(list => {
    if(e.target.classList[0] === list.classList[0]) {
      list.classList.remove("hidden")
    } else {
      list.classList.add("hidden")
    }
  })
}

//adding list of steps of site
const siteLists = Array.from(document.querySelectorAll(".site-list"))

const addSiteLists = (e) => {
  addLists(e, siteLists)
}

siteBtns.forEach(button => button.addEventListener("click", addSiteLists))

//adding list of steps of git client
const gitClientLists = Array.from(document.querySelectorAll(".git"))

const addGitClientLists = (e) => {
  addLists(e, gitClientLists)
}

gitClientBtns.forEach(button => button.addEventListener("click", addGitClientLists))

//adding list of steps of project site
const projectSiteLists = Array.from(document.querySelectorAll(".project"))

const addProjectSiteLists = (e) => {
  addLists(e, projectSiteLists)
}

projectSiteBtns.forEach(button => button.addEventListener("click", addProjectSiteLists))

//function for debouncing scroll event
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

//blocks sliding up
const blocks = Array.from(document.querySelectorAll(".block"));

const slideUpBlocks = () => {
  blocks.forEach(block => {
    const slideInAt = window.scrollY + window.innerHeight - 50;

    const maxSlide = window.scrollY + window.innerHeight + block.height;

    const isShown = slideInAt > block.offsetTop || maxSlide < block.offsetTop;

    if(isShown) {
      block.classList.add("slide-up")
    } 
  }) 
}

const refreshClasses = () => {
  blocks.forEach(block => {
    block.classList.remove("slide-up");
  })
  slideUpBlocks();
}

const btns = Array.from(document.querySelectorAll("button"));

btns.forEach(btn => btn.addEventListener("click", refreshClasses));

window.addEventListener("scroll", debounce(slideUpBlocks, 40));





