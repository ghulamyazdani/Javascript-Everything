const mealsEl = document.getElementById('meals');
const favoriteContainer = document.querySelector('.fav-meals');
const searchTerm = document.getElementById("search-term");
const searchBtn = document.getElementById("search");
async function getRandomMeal(){
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
    
    
    const respData= await resp.json();
    const randomMeal = respData.meals[0];
    addMeal(randomMeal,true);
}
async function getMealById(id){
    const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const respData = await resp.json();
    const meal = respData.meals[0];
    return meal;

}
async function getMealsBySearch(term){
    const resp = await  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
    const respData = await resp.json();
    const meals = respData.meals;

    return meals;
}
getRandomMeal();

function addMeal(mealData,random = false){
    const meal = document.createElement('div');
    meal.classList.add('meal');
    meal.innerHTML = ` 
    <div class="meal-header">
    ${random ? `<span class="random"> Random Recipe</span>` : `<span class="random"> result</span>`}
      
      <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>
    <div class="meal-body">
      <h4>${mealData.strMeal}</h4>
      <button class="fav-btn">
        <i class="fas fa-heart" id="heart"></i>
      </button>
    </div>
  `
mealsEl.appendChild(meal);
const btn = document.querySelector('.fav-btn');
btn.addEventListener('click',() => {
  if(btn.classList.contains('active')){
    btn.classList.remove('active');
    removeMealLS(mealData.idMeal);
  }else{
    addMealLS(mealData.idMeal);
     btn.classList.add('active');
  }
  favoriteContainer.innerHTML = "";
  fetchFavMeals();
})
}
function addMealLS(mealId){
    const mealIds = getMealsLS();
    localStorage.setItem('mealId',JSON.stringify([...mealIds,mealId]));
}
function removeMealLS(mealId){
  const mealIds = getMealsLS();
  localStorage.setItem('mealId',JSON.stringify(mealIds.filter(id =>id !== mealId)));
}
function getMealsLS(){
    const mealIds = JSON.parse(localStorage.getItem('mealId'));
    return mealIds === null ? [] : mealIds;
}
async function fetchFavMeals(){
  favoriteContainer.innerHTML = "";
    const mealIds = getMealsLS();
    // const Meals = [];
    mealIds.forEach(mealId => {
        getMealById(mealId).then(meal => {
          //  Meals.push(meal);
           addMealToFav(meal);
        })
    })
    
}
function addMealToFav(mealData){
  const favMeal = document.createElement("li");

    favMeal.innerHTML = `
        <img
            src="${mealData.strMealThumb}"
            alt="${mealData.strMeal}"
        /><span>${mealData.strMeal}</span>
        <button class="clear"><i class="fas fa-window-close"></i></button>
    `;
    const btn = favMeal.querySelector('.clear');
    btn.addEventListener('click', () => {
        removeMealLS(mealData.idMeal);
        // btn.parentElement.remove();
        fetchFavMeals();
    })
    favoriteContainer.appendChild(favMeal);
}
searchBtn.addEventListener("click", async () => {
  mealsEl.innerHTML = "";
  const search = searchTerm.value;
  const meals = await getMealsBySearch(search);

  if (meals) {
      meals.forEach((meal) => {
          addMeal(meal);
      });
  }
});