const findFoods = () => {
    document.getElementById('error-message').innerText = "";

    const searchFood = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
        .catch(error => displayError('Something Went Wrong!! Please try again later!'));
}
const displayFoods = foods => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = "";
    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');

        foodDiv.className = 'col mt-5'
        foodDiv.innerHTML = `
        
        <div class="text-center shadow">
            <div class="card-body card-body2">
                <button onclick="getFood(${food.idMeal})" class="btn" type="submit">
                <img src="${food.strMealThumb}" class="img-size card-img-top " alt="...">
                <h5 class="card-title">${food.strMeal}</h5>
                </button>
            </div>
        </div>
        `;
        foodContainer.appendChild(foodDiv);
    });
}
const getFood = async (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        
        displayFood(data.strIngredient1);

        // .then(res => res.json())
        // .then(data => displayFood(data.catagories));
    }
    catch (error) {
        displayError('Sorry! Please try again later!!!')

    }
}
const displayFood = food => {
    const foodsDiv = document.getElementById('food-categories');
    foodsDiv.innerText = food;
}
const displayError = error => {
    const errorTag = document.getElementById('error-message');

    errorTag.innerText = error;
}