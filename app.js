let toggle = document.querySelector(".toggle");
let body = document.querySelector("body");

toggle.addEventListener("click", function () {
	body.classList.toggle("open");
});

// const toggle = document.querySelector(".toggle");
// const headerNavMobile = document.querySelector(".header_nav_mobile");
// const headerNavMobileUl = document.querySelector(".header_nav_mobile_ul");
// toggle.addEventListener("click", () => {
// 	body.classList.toggle("open");
// 	headerNavMobile.classList.toggle("active");
// 	headerNavMobileUl.classList.toggle("active");
// });
