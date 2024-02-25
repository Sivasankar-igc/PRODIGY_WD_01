const listElem = document.querySelectorAll(".links ul li");
const anchor = document.querySelectorAll(".links ul li a");
const hamAnchor = document.querySelectorAll("#ham-menu li a");

let i = 0;
let isAnimated = false;


if (listElem.length > 0) {
    let i = 0;
    setInterval(() => {
        if (i < listElem.length) {
            listElem[i++].classList.add("afterEffect")
        }
    }, 100)
}

hamAnchor.forEach((a, index) => {
    a.addEventListener("click", () => {
        for (let index = 0; index < 3; index++) {
            hamAnchor[index].classList.remove("active");
        }
        a.classList.add("active");
    })
})
const showMenu = () => {
    document.querySelector(".nav__bar__wrapper .hamburger #ham-menu").classList.toggle("show__menu");
    let lists = document.querySelectorAll(".nav__bar__wrapper .hamburger #ham-menu li");
    let i = 0;
    let time = setInterval(() => {
        i < 3 ? lists[i++].classList.toggle("slide") : clearInterval(time)
    }, 100)
}