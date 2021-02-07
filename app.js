const findFoods = () => {
    const searchFood = document.getElementById('search-field').value;
    const url = ` https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals));
}
const displayFoods = foods => {
    const foodContainer = document.getElementById('food-contaiber');

    foods.forEach(food => {
        console.log(food);
        const foodDiv = document.createElement('div');
        foodDiv.className = 'col mt-5'
        foodDiv.innerHTML = `
        <div class="card card text-center shadow rounded">
            <img src="images/menu1.png" class="card-img-top " alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strIngredient}</h5>
            </div>
        </div>
        `;
        foodContainer.appendChild(foodDiv);
});

}