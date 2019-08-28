// Select the tags in our HTML...
const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")
const navTag = document.querySelector("nav")

// when toggleTag is clicked, toggle a class of "open" on the mainTag
// and if open
toggleTag.addEventListener("click", function () {
    mainTag.classList.toggle("open")
    navTag.classList.toggle("open")

    if (mainTag.classList.contains("open")) {
        toggleTag.innerHTML = `<img src="close.svg"> Close`
    } else {
        toggleTag.innerHTML = `<img src="menu.svg"> Menu`
    }

})