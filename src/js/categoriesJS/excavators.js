let li = document.querySelectorAll("li")


li.forEach((lis) => {
    lis.addEventListener("click", function (e) {
        if (lis.id === e.target.id && !lis.classList.contains("focused")) {
            lis.classList.toggle("focused")
        }
    })
})

document.addEventListener("click", function (e) {
    li.forEach((lis) => {
        if (e.target !== lis && lis.classList.contains("focused") && e.target.nodeName === "LI") {
            lis.classList.remove("focused")
        }
    })
})