// Automatic current page link
// console.log("IT'S ALIVE!");
// function getPageLinks (selector, context = document){
//     return Array.from(context.querySelectorAll(selector));
// }
// let navLinks = getPageLinks("nav a");
// // console.log("this is navLinks: ", navLinks);

// // let test_array = [1, 2, 3, 4];
// // console.log(test_array.find(n=> n > 2));
// // console.log(location.pathname);
// // console.log(location.host);

// // link to current page will have the same
// // host and pathname as the current page
// let currentLink = navLinks.find(a => a.host === location.host  && a.pathname === location.pathname);
// // ? operator in js handles undefined errors
// currentLink?.classList.add("current");

// Automatic Navigation Menu
let pages = [
    {url: "", title: "Home"},
    {url: "projects/", title: "Projects"},
    {url: "contact/", title: "Contact"},
    {url: "https://livy456.github.io/portfolio/", title: "Portfolio"},
    {url: "resume/", title: "Resume"},
];
// console.log("number of pages: ", pages.length);

let nav = document.createElement("nav");
document.body.prepend(nav);

//add a link to each page on the navigation menu
for (let p of pages)
{
    let url = p.url;
    let title = p.title;

    // create a 
    let a = document.createElement("a");
    let link = document.createTextNode(title);
    
    a.appendChild(link);
    a.title = title;
    a.href = url  + "index.html";

    // document.body.appendChild(a);
    // console.log("a: ", a, " p:", p);
    // document.body.prepend(a);
    nav.insertAdjacentHTML("beforeend", `<a href="${ url }"> ${ title }</a>`);

}