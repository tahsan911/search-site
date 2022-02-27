const searchBtn = () =>{
    const inputSearch = document.getElementById('input-field');
    const inputValue = inputSearch.value;
    inputSearch.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(res => res.json())
    .then(data => displaySearch(data.meals))
    const searchBox = document.getElementById('search-box');
    searchBox.innerHTML = '';
    
}

const displaySearch = (meals) => {
    const searchBox = document.getElementById('search-box');
    for(const meal of meals){
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card w-75">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
        </div>
    </div>`
        searchBox.appendChild(div);
    }
   
}