const loadMeals = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = (meals) =>{
    const mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        console.log(meal)
      const createDiv = document.createElement('div')
      createDiv.classList.add('col') ;
      mealContainer.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
            </div>
        </div>

      `
      mealContainer.appendChild(createDiv);
        
    });
}

const searchFood = () =>{
    const inputField = document.getElementById('search')
    const inputValue = inputField.value;
    loadMeals(inputValue)
    inputField.value ='';
}
