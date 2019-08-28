// pick the images and layer based on z-index CSS
const slideArea = document.querySelector("div.slideshow")

// the images into an array that can be used!
const images = slideArea.querySelectorAll("img")

// to keep track of...
let currentSlide = 0
let zValue = 1

// when clicked slide area, change the images z-index
slideArea.addEventListener("click", function () {
    currentSlide = currentSlide + 1
    zValue = zValue + 1

    if (currentSlide > images.length - 1) {
        currentSlide = 0;
    }

    // remove the animation style for EVERY IMAGE when not required
    // older way: images.forEach(function (image) {
    images.forEach(image => {
        image.style.animation = ""
    })

    // pick the correct image
    images[currentSlide].style.zIndex = zValue
    images[currentSlide].style.animation = "fade 0.75s"
})

// mouse over slideArea, put images in random place on screen
slideArea.addEventListener("mouseover", function () {
    images.forEach(image => {
        // This is the old way
        // const xDirection = 100 * Math.random() - 50
        // const yDirection = 100 * Math.random() - 50

        // This is the newer "snap" to "grid" i.e -25, 0, 25, 50...
        const xDirection = 25 * (Math.floor(Math.random() * 5)) - 50
        const yDirection = 25 * (Math.floor(Math.random() * 5)) - 50

        image.style.transform = `translate(${xDirection}px, ${yDirection}px)`
    })
})

// mouse moved away put images back in original "stacked" form
slideArea.addEventListener("mouseout", function () {
    images.forEach(image => {
        image.style.transform = ""
    })
})










