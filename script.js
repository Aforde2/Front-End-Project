const drinkBtn = document.getElementById('cocktail-button');
const foodBtn = document.getElementById('food-button');
const input = document.getElementById('query');
const searchBtn = document.getElementById('search');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    const searchTerm = input.value
    //we need to prevent the form's  default beahavior of refreshing the page
    event.preventDefault()
    fetch(`https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${key}&includeIngredients=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
});


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9b973d6284msh5c9a2e3f9b461eap1f9eb0jsna7b717b14f42',
		'X-RapidAPI-Host': 'drinks-digital1.p.rapidapi.com'
	}
};

drinkBtn.addEventListener('click', () => {
    //Using the Query Parameter limit={randomNum} is not giving you a random drink, 
    //rather this is randomly giving you a different size list of drinks each api call
    //this needs to be changed to 
    fetch(`https://drinks-digital1.p.rapidapi.com/v1/cocktails`, options)
        .then(response => response.json())
        .then(data => {

        // Data gives you a list of drinks, if you do data[0] in link 38 through 44 you will always get the first drink no matter what you do
        // it is grabbing the drink in the list that is at the 0 position, the first drink.
        // We need to randomize how we select a drink from the list rather than grabbing position zero. this is the purpose of
        //function randomdrink
            console.log(data);
            const drink = randomdrink(data)

            const alcoholic = drink.alcoholic;
            const cocktailName = drink.cocktail_name;
            const description = drink.description;
            const garnish = drink.garnish;
            const drinkContainer = document.getElementById('content-container1');
            const div1 = document.createElement('div');

            drinkContainer.innerHTML = `<div class="card w-60" style="width: 20rem; height: auto;">
            
            <h3>${cocktailName}</h3>
            <p class="card text-center"><small class="text-muted">serves: ${garnish}</small></p>
            <div class="card-body">
                <p class="card-text"><small>${description}</small></p>
                <p class="card-footer"><small class="text muted"${alcoholic}</small></p>
            </div>
            </div>`
            drinkContainer.append(div1);
        });
});


const key = 'cae44d7078c3414a8f7abd3a8419364a';

//What random drink does is that it grabs an index from 0 to the max size of the list of drinks
//and then uses that randsomly selected index and then does drinks[randomIndex] and then returns that drink
function randomdrink (drinks) {
    let randomIndex = Math.floor(Math.random() * drinks.length);

    let drink = drinks[randomIndex];
    return drink;
}


foodBtn.addEventListener('click', () => {
    // clearContentContainer();
    fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${key}`)
    .then((response) => response.json())
    .then((data) => {

        console.log(data);
        let foodList = data.recipes;
        foodList.forEach(element => {//<== grabs each variable from recipe array

        const img_src = element.image;
        const title = element.title;
        const instructions =element.instructions;
        const servings =element.servings;
        const summary =element.summary;
        const foodContainer = document.getElementById('content-container2');
        const glutenFree =element.glutenFree;
        const vegetarian =element.vegetarian;
        const vegan =element.vegan;
        const cheap =element.cheap;
        const div1 = document.createElement('div');
        const p1 = document.createElement('p');
        p1.innerHTML = instructions;
        const drinkContainer = document.getElementById('content-container');
        console.log(element.title);
        div1.innerText = (element.title);
        // drinkContainer.append(div1)
        // drinkContainer.append(p1)

        foodContainer.innerHTML = `<div class="card w-60" style="width: 20rem; height: auto;">
            <img src="${img_src}" class="card-img-top" alt="...">
            <h3>${title}</h3>
            <p class="card text-center"><small class="text-muted">serves: ${servings}</small></p>
            <div class="card-body">
                <p class="card-text"><small>${instructions}</small></p>
                <p class="card-footer"><small class="text muted"${summary}</small></p>
            </div>
          </div>`
        });
    });
});
