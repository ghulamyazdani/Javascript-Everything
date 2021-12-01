const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const main = document.getElementById("main");
  const form = document.getElementById("form");
  const search = document.getElementById("search");

getMovies();

async function getMovies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();
  showMovies(respData.results);
}
async function searchedMovies(value){
  const resp = await fetch(SEARCHAPI+value);
  const respData = await resp.json();
  
  showMovies(respData.results);
}
function showMovies(Data) {
  main.innerHTML = "";
  Data.forEach((movie) => {
    const movieEl = document.createElement("div");
  
    const { poster_path, title, vote_average,overview } = movie;
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
            <img src="${poster_path!=null?IMGPATH + poster_path:IMGPATH+"ckL8dcFg2UAvLGqtNReWdobn6yd.jpg"}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClass(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h4>overview:</h4>
            ${overview}</div>`;
            
    main.appendChild(movieEl);
  });
}

function getClass(votes) {
  if (votes >= 8) {
    return "green";
  } else if (votes < 8 && votes >= 5) {
    return "yellow";
  } else {
    return "red";
  }
}


form.addEventListener("submit", (e) =>{
e.preventDefault();
const searchTerm = search.value;
if(searchTerm){
  searchedMovies(searchTerm);
}

})

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".container");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}