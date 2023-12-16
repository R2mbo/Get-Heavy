let showBtn = document.getElementById("bars");
let hideBtn = document.getElementById("bars-exit")
let mobileList = document.getElementsByClassName("mobile-list")[0];
let categoryMobile = document.getElementById("cat");
let dropMobile = document.getElementById("drop-mobile")


// ! View & Hide the Mobile Sidebar
showBtn.addEventListener("click", function () {
    mobileList.classList.add("visible")
    mobileList.classList.add("right")
    showBtn.style.setProperty("display", "none")
    hideBtn.style.setProperty("display", "flex")
})
// ! View & Hide The Category Drop Down List
categoryMobile.addEventListener("click", function () {
    dropMobile.classList.toggle("height")
    dropMobile.classList.toggle("visible")
    categoryMobile.classList.toggle("yellow")
    document.querySelector("#cat svg").classList.toggle("rotate");
    document.querySelector("#cat svg").classList.toggle("fill");
})

document.addEventListener("click", function (e) {
    // !Mobile List to Check if svg clicked on anything inside it or not
    if (!e.target.matches("#bars") && mobileList.classList.contains("visible") &&
        !e.target.closest(".mobile-list")) {
        // ! Check if the drop down inside have visible and height or not
        if (dropMobile.classList.contains("visible")) {
            dropMobile.classList.remove("visible")
            dropMobile.classList.remove("height")
            mobileList.classList.remove("visible")
            mobileList.classList.remove("right")
            categoryMobile.classList.remove("yellow")
            document.querySelector("#cat svg").classList.remove("rotate");
            document.querySelector("#cat svg").classList.remove("fill");
            showBtn.style.setProperty("display", "flex")
            hideBtn.style.setProperty("display", "none")
        } else {
            mobileList.classList.remove("visible")
            mobileList.classList.remove("right")
            categoryMobile.classList.remove("yellow")
            document.querySelector("#cat svg").classList.remove("rotate");
            document.querySelector("#cat svg").classList.remove("fill");
            showBtn.style.setProperty("display", "flex")
            hideBtn.style.setProperty("display", "none")
        }
    }
    // ! Check if the click is inside the category list  
    // ! and not outside the mobile list
    if (!e.target.closest("#cat-holder") && !e.target.closest(".mobile-list")) {
        dropMobile.classList.remove("visible")
        dropMobile.classList.remove("height")
    }
})

// ! Above 768px

let categoryWeb = document.getElementById("cat-web");
let dropDownWeb = document.getElementById("drop-down-web");

// ! View the Drop-Down 
categoryWeb.addEventListener("click", function (e) {
    if (e.target.closest("#cat-web") || e.target.matches("#cat-web svg")) {
        dropDownWeb.classList.toggle("open")
        document.querySelector("#cat-web svg").classList.toggle("rotate")
        document.querySelector("#cat-web svg").classList.toggle("fill")
        categoryWeb.classList.toggle("yellow")
    }
})

document.addEventListener("click", function (e) {
    if (!e.target.matches("#cat-web")
        && !e.target.matches("#cat-web svg")
        && !e.target.closest(".drop-down-list")
        && dropDownWeb.classList.contains("open")) {
        dropDownWeb.classList.remove("open")
        document.querySelector("#cat-web svg").classList.remove("rotate")
        document.querySelector("#cat-web svg").classList.remove("fill")
        categoryWeb.classList.remove("yellow")
    }
})


