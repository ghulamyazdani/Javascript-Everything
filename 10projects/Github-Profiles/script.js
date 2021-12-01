const APIURL = "https://api.github.com/users/";
const form = document.getElementById("form");
const usernameEl = document.getElementById("search");
const container = document.getElementById("main");
getUserData("ghulamyazdani");
async function getUserData(username){
    const resp = await fetch(APIURL+username);
    const respData =  await resp.json();
    showCard(respData);
}
function showCard(Data){
    container.innerHTML = '';
const {name,avatar_url,bio,followers,following} = Data;
 const card = document.createElement('div');
 card.classList.add('card');
 card.innerHTML = `
      <div>
        <img src="${avatar_url}" alt="" />
        <div class="follow-stats">
        <span>${followers}</span><span>${following}</span>
        </div>
      </div>
      <div>
          <h3>${name}</h3>
          <p>${bio}</p>
      </div>`;
    container.appendChild(card);
}
form.addEventListener('submit', (e) => {
e.preventDefault();
const username = usernameEl.value;
getUserData(username);
})