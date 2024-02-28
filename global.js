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
const ARE_WE_HOME = document.documentElement.classList.contains("home");

let nav = document.createElement("nav");
document.body.prepend(nav);

//add a link to each page on the navigation menu
for (let p of pages)
{
    let url = p.url;
    let title = p.title;

    // create link and add it to nav menu
    let a = document.createElement("a");
   
    if (!ARE_WE_HOME && !url.startsWith("http"))
    {
        url = "../" + url;
        console.log("I am not home anymore!!");
    }

    if (ARE_WE_HOME)
    {
        url = "./" + url;
        // might include index.html
    }

    // reassigning value for url using ternary operator
    // url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url:url;

    a.href = url;
    a.textContent = title;

    if (a.host === location.host && a.pathname === location.pathname)
    {
        a.classList.add("current");
    }
    // a.classList.toggle("current", a.host === location.host && a.pathname === location.pathname);

    else if (a.host !== location.host)
    {
        a.target = "_blank";
    }

    nav.append(a);

    // add option to change the color scheme of the page
    document.body.insertAdjacentHTML("afterbegin", 
    `<label class="color-scheme">
        Theme:
        <select>
            <option value="light dark">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </label>
    `);

    let select = document.querySelector("select");
    if ("colorScheme" in localStorage)
    {   
        document.documentElement.style.setProperty("color-scheme", localStorage.colorScheme);
        select.value = localStorage.colorScheme;
    }
    
    select.addEventListener("input", function (event){
        
        document.documentElement.style.setProperty("color-scheme", event.target.value);
        localStorage.colorScheme = event.target.value;
    });
    // nav.insertAdjacentHTML("beforeend", `<a href="${ url }"> ${ title }</a>`);
}

