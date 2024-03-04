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
        url = "../" + url
    }

    a.href = url;
    a.textContent = title;

    if (a.host === location.host && a.pathname === location.pathname)
    {
        a.classList.add("current");
    }

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
}

