const mealInfo = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = (meals)=>{
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML =``;
    meals.forEach(meal => {
        console.log(meal)
        const createDiv = document.createElement('div')
        createDiv.classList.add('col')
        createDiv.innerHTML= `
        <div onclick="loadDetails(${meal.idMeal})"  class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
            </div>
        </div>
        `
        mealContainer.appendChild(createDiv)
    });
}

const searchFood = () =>{
    const inputField = document.getElementById('search');
    const inputResult = inputField.value;
    inputField.value = '';
    mealInfo(inputResult)
}

const loadDetails = (idMeal) =>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.meals[0]))
}

const displayDetails = meal =>{
    const detailsContainer = document.getElementById('details-container');
    const detailsDiv = document.createElement('div')
    detailsContainer.innerHTML = ``;
    detailsDiv.classList.add('card');
    detailsDiv.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
    </div>
    `

    detailsContainer.appendChild(detailsDiv)

}

mealInfo('')