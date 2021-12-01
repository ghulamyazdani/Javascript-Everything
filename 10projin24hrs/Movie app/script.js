const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
  const main = document.getElementById("main");
  const form = document.getElementById("form");
  
getMovies();

async function getMovies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();
  console.log(respData.results);
  respData.results.forEach((movie) => {

    const movieEl = document.createElement("div");
  
    const { poster_path, title, vote_average } = movie;
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
            <img src="${IMGPATH + poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClass(vote_average)}">${vote_average}</span>
            </div>`;
    main.appendChild(movieEl);
  });
  console.log(respData.results);
  return respData.results;
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

