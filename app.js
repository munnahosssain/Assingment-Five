const findFoods = () => {

    const searchFood = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals));
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
                <button onclick="getFood('${food.strMeal}')" class="btn" type="submit">
                <img src="${food.strMealThumb}" class="img-size card-img-top " alt="...">
                <h5 class="card-title">${food.strArea}</h5>
                </button>
            </div>
        </div>
        `;
        foodContainer.appendChild(foodDiv);
    });
}
const getFood = catagories => {
    console.log(catagories);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${catagories}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.catagories));

}
const displayFood = food => {
    const foodsDiv = document.getElementById('food-categories');
    foodsDiv.innerText = food;
}
