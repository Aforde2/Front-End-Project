const drinkBtn = document.getElementById('cocktail-button');
const foodBtn = document.getElementById('food-button');
const input = document.getElementById('query');
const searchFoodBtn = document.getElementById('searchFood');
const searchDrinkBtn = document.getElementById('searchDrink');
const userInput = document.getElementById('userSearch');
const userSelectionDisplay = document.getElementById('userSelectionDisplay');
const drinkContainer = document.getElementById('content-container1');
const foodContainer = document.getElementById('content-container2');

//search bar functionality
searchDrinkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const reqValues = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b29fc64d5dmsha8ed2b40f31773ap164a7ejsn6aa4d4243795',
            'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
        }
    };
    let val = userInput.value;
    fetch(`https://drinks-digital1.p.rapidapi.com/v1/cocktails/search?query=${val}&limit=1`, reqValues)
        .then(response => response.json())
        .then(data => {
            const newDiv = document.createElement('div')
            let name = data[0].cocktail_name;
            let description = data[0].description;
            const imgPlaceholder = './Cocktail_Bar_Image.webp';
            newDiv.innerHTML = `
            <div id="drink-search" class="card" style="width: 18rem;">
                <img src="${imgPlaceholder}" id="drink-search-img" class="card-img-top">
                <div class="card-body"> 
                    <h3 class="card-text">${name}</h3>
                    <h6 class="card-footer">${description}</h6>
                </div>
            </div>
            `
            drinkContainer.appendChild(newDiv);
        })
        .catch(err => console.error(err));
})

searchFoodBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let val = userInput.value;
    fetch (`https://api.spoonacular.com/food/menuItems/search?query=${val}&apiKey=cae44d7078c3414a8f7abd3a8419364a`)
    .then (response => response.json())
    .then (data => {
        const newDiv = document.createElement('div');
        let title = data.menuItems[0].title;
        let image = data.menuItems[0].image;
        let servings = data.menuItems[0].servings.number;
        newDiv.innerHTML = `
        <div id="food-search" class="card" style="width: 18rem;">
            <img src="${image}" id="food-search-img" class="card-img-top" >
            <div class="card-body"> 
                <h3 class="card-text">${title}</h3>
                <h6 class="card-footer"> servings: ${servings}</h6>
            </div>
        </div>
        `
        console.log(newDiv)
        foodContainer.appendChild(newDiv);
    });
});


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b973d6284msh5c9a2e3f9b461eap1f9eb0jsna7b717b14f42',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};
//What random drink does is that it grabs an index from 0 to the max size of the list of drinks
//and then uses that randsomly selected index and then does drinks[randomIndex] and then returns that drink
function randomDrink (drinks) {
    let randomIndex = Math.floor(Math.random() * drinks.length);
    let drink = drinks[randomIndex];
    return drink;
}

drinkBtn.addEventListener('click', () => {

    fetch(`https://drinks-digital1.p.rapidapi.com/v1/cocktails?limit=20`, options)
        .then(response => response.json())
        .then(data => {

            const drink = randomDrink(data);
            const alcoholic = drink.alcoholic;
            const cocktailName = drink.cocktail_name;
            const description = drink.description;
            const garnish = drink.garnish;
            const imgPlaceholder = './Cocktail_Bar_Image.webp';
                
            const div1 = document.createElement('div');
            
            drinkContainer.innerHTML = `<div id="drinkCard" class="card w-60" style="width: 20rem; height: auto;">
            
            <img src="${imgPlaceholder}" div id="drinkImage" alt="placeholder-image"/>
            <h3>${cocktailName}</h3>
            <p id ="garnish" class="card text-center"><small class="text-muted">serves: ${garnish}</small></p>

            <div class="card-body">
                <p class="card-text"><small>${description}</small></p>
                <p class="card-footer"><small class="text muted"${alcoholic}</small></p>
            </div>
            </div>`
            drinkContainer.append(div1);
        });
});




foodBtn.addEventListener('click', () => {
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=cae44d7078c3414a8f7abd3a8419364a`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
         let foodList = data.recipes;
        foodList.forEach(element => {//<== grabs each variable from recipe array

            const  img_src = element.image;
            const title = element.title;
            const instructions =element.instructions;
            const servings =element.servings;
            // const summary =element.summary;
            
            
        foodContainer.innerHTML = `
        <div id="foodCard" class="card w-60" style="width: 20rem; height: auto;">
            <img src="${img_src}" div id="foodImage" class="card-img-top" alt="...">
            <h3>${title}</h3>
            <p id="servings" class="card text-center">
                <small class="text-muted">serves: ${servings}</small>
            </p>
            <div class="card-body">
            <p class="card-text">
                <small>${instructions}</small>
            </p>
        </div>
        </div>`
        });       
    });
});