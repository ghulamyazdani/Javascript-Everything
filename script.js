const projects = document.getElementById("projects");

const obj = [
  {
    name: "Calculator",
    description: "Calculator for simple calculations",
    image: "./Assets/Cal.png",
    link: "./10projects/calculator/calc.html",
  },
  {
    name: "countdown-timer",
    description: "Countdown timer for new year reminder",
    image: "./Assets/count.png",
    link: "./10projects/countdown-timer/index.html",
  },
  {
    name: "Github-Profiles",
    description: "Shows github profiles on username input",
    image: "./Assets/git.png",
    link: "./10projects/Github-Profiles/index.html",
  },
  {
    name: "Movie app",
    description: "movie website shows top movies with proper descriptions",
    image: "./Assets/movie.png",
    link: "./10projects/Movie app/index.html",
  },
  {
    name: "sticky-notes",
    description: "app to take up notes from users",
    image: "./Assets/notwa.png",
    link: "./10projects/notes-app/index.html",
  },
  {
    name: "Quiz-app",
    description: "A simple quiz web app",
    image: "./Assets/quiz.png",
    link: "./10projects/Quiz-app/index.html",
  },
  {
    name: "recipe-app",
    description: "A website to show all your fav foods recipe",
    image: "./Assets/recipe.png",
    link: "./10projects/recipe-app/index.html",
  },
  {
    name: "Todo app",
    description: "A Todo app:user can add or remove item from list easily",
    image: "./Assets/todo.png",
    link: "./10projects/Todo app/index.html",
  },
];

function addProj(obj) {
  obj.forEach((project) => {
    const projectEl = document.createElement("li");
    projectEl.classList.add("card");
    projectEl.classList.add("type2");
    projectEl.innerHTML = `
        <figure>
          <img src=${project.image} alt="test" />
        </figure>
        <h2>${project.name}</h2>
        <p>
          ${project.description}
        </p>
        <a href="${project.link}"><div class="button">check it out</div></a>
        `;
    projects.appendChild(projectEl);
  });
}

addProj(obj);
