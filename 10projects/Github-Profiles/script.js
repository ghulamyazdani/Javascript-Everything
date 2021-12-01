const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const usernameEl = document.getElementById("search");
const container = document.getElementById("main");
getUserData("ghulamyazdani");
getOrg("ghulamyazdani");
async function getUserData(username) {
  const resp = await fetch(APIURL + username);
  const respData = await resp.json();
  console.log(respData);
  showCard(respData);
}
async function getOrg(username) {
  const resp = await fetch(APIURL + username + "/orgs");
  const respData = await resp.json();
  addOrgsToCard(respData);
}
function showCard(Data) {
  container.innerHTML = "";
  const { name, avatar_url, bio, followers, following, company, html_url,public_repos } =
    Data;
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <div class="align">
        <a href="${html_url}">
         <img src="${avatar_url}" alt="" />
        </a>
        <span class="company">${company}</span>
        <div class="follow-stats">
        <span>${followers}<b>Followers</b></span><span>${following}<b>Following</b></span><span>${public_repos}<b>Repos</b></span>
        </div>
      </div>
      <div>
          <h3>${name}</h3>
          <p>${bio}</p>
          <h5>Part of:</h5>
          <div id="orgs" class="orgs">
          </div>
      </div>`;
  container.appendChild(card);
}
function addOrgsToCard(Data) { 
  const orgs = document.getElementById("orgs");
  Data.forEach((organisation)=>{
    const org = document.createElement("div");
    org.classList.add("org");
    org.innerHTML = `
    <img src="${organisation.avatar_url}" alt="" />
    <span>${organisation.login}</span>
  `;
    orgs.appendChild(org);
  });
  
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameEl.value;
  getUserData(username);
  getOrg(username);
});
