const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("search-box")
const searchResult = document.getElementById("search-results")
const showMore = document.getElementById("show-more-btn")
const themeIcon = document.getElementById("theme-icon")

let keyword = "";
let page = 1;
let accessKey = "2N8NzPI86LwzN01t5xmXtEdAMKjQ0r4QAFYN-wCHkoM"

async function searchImages() {
    keyword = searchBox.value;

    const Url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(Url);

    const data = await response.json();
    console.log(data);

    if (page === 1) {
        searchResult.innerHTML = ""
    }

    const results = data.results;



    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        // console.log("image loaded");


        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        // console.log("link loaded");

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })

    showMore.style.display = "block"


}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1
    searchImages();
})

showMore.addEventListener("mouseover", () => {
    page++;
    searchImages()
})


themeIcon.onclick = () => {
    document.body.classList.toggle("light")

    if (document.body.classList.contains('light')) {
        themeIcon.classList.add('ri-moon-fill')
        themeIcon.classList.remove('ri-sun-fill')
    } else {
        themeIcon.classList.add('ri-sun-fill')
        themeIcon.classList.remove('ri-moon-fill')
    }

    searchBox.style.border="1px solid hsl(253,100%,15%)"
}


const loader=document.getElementById("preloader")

window.addEventListener("load",()=>{
    loader.style.display="none";
})

const barIcon=document.getElementById("bar-icon")
const navUl=document.getElementById("menues")

barIcon.addEventListener("click",()=>{
   
    if(navUl.classList.contains("hide")){
        navUl.classList.remove("hide")
    }
    else{
        navUl.classList.add("hide")

    }
})