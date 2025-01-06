const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const mealContainer = document.getElementById("meal-container");

async function fetchMeals(query) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await res.json();
    if (data.meals) {
        displayMeals(data.meals);
    } else {
        mealContainer.innerHTML = `<h1 class="text-center text-danger">No meals found for "${query}".</h1>`;
    }
}

function displayMeals(meals) {
    mealContainer.innerHTML = meals.map(meal => `
        <div class="col-md-4">
            <div class="card meal-card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <button class="btn btn-primary" onclick="fetchMealDetails(${meal.idMeal})" data-bs-toggle="modal" data-bs-target="#mealModal">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

async function fetchMealDetails(mealId) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
}

function displayMealDetails(meal) {
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
        <h3>${meal.strMeal}</h3>
        <img src="${meal.strMealThumb}" class="img-fluid mb-3" alt="${meal.strMeal}">
        <p><strong>Category:</strong> ${meal.strCategory}</p>
        <p><strong>Area:</strong> ${meal.strArea}</p>
        <p><strong>Instructions:</strong> ${meal.strInstructions.slice(0, 300)}</p>
    `;
}

searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
        fetchMeals(query);
    } else {
        alert("Please enter a search term.");
    }
});
