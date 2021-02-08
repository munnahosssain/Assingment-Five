
const findFoods = () => {
    
    const searchFood = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals));
}
const displayFoods = foods => {
    const foodContainer = document.getElementById('food-container');

    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.className = 'col mt-5'
        foodDiv.innerHTML = `
        <div class="text-center shadow">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <img src="${food.strMealThumb}" class="img-size card-img-top " alt="...">
                <div class="mt-2">
                <button onclick="getFood('${food.strMeal}')" class="btn btn-outline-success" type="submit">Click</button>
                </div>

            </div>
        </div>
        `;
        foodContainer.appendChild(foodDiv);
    })
}

// const getFood = catagories => {
//     const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayFood(data.categories));
// }
// const displayFood = food => {
//     const foodsDiv = document.getElementById('food-categories');
//     foodsDiv.innerText = food;
// }