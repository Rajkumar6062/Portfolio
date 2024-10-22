
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const logo = document.querySelector(".logo");


mobile_nav.addEventListener('click', () => toggleNavbar())
const toggleNavbar = () => {
    nav_header.classList.toggle("active");
}



let a = document.querySelectorAll(".navbar-list li")
a.forEach((ele)=>{
ele.addEventListener("click",()=>{
    nav_header.classList.remove("active");
})
}) 
//  fuction for Go To Top Button 

// logo.addEventListener("click", scrollfunction);
// let scrollTopBTN = document.querySelector(".gototopImage");
// scrollTopBTN.addEventListener("click", scrollfunction)

// function scrollfunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

// window.onscroll = function () {

//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         scrollTopBTN.style.display = "block";
//     } else {
//         scrollTopBTN.style.display = "none";
//     }
// }



// ============= list hide=======================


// let hide=document.querySelector(".navbar");
let h = document.querySelectorAll(".navbar-list li");
h.forEach((i)=>{
    console.log(i)
    i.addEventListener("click",()=>{
        document.querySelector(".navbar").style.transform = "translateY('-100%')";
        console.log(i)
    })
})